import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getTreatment } from "../data/treatmentData";
import bgVideo from "../assets/Background.mp4";

// Animal images
import dog from "../assets/dog.jpg";
import cat from "../assets/cat.jpg";
import cow from "../assets/cow.jpg";
import bird from "../assets/bird.jpg";
import horse from "../assets/horse.jpg";
import rabbit from "../assets/rabbit.jpg";
import goat from "../assets/goat.jpg";
import sheep from "../assets/sheep.jpg";

const ANIMALS = [
    { id: "dog", name: "Dog", color: "#C87941", img: dog, emoji: "🐕" },
    { id: "cat", name: "Cat", color: "#7B68C8", img: cat, emoji: "🐈" },
    { id: "cow", name: "Cow", color: "#4A9B6F", img: cow, emoji: "🐄" },
    { id: "horse", name: "Horse", color: "#B85C5C", img: horse, emoji: "🐎" },
    { id: "goat", name: "Goat", color: "#6B9EC7", img: goat, emoji: "🐐" },
    { id: "sheep", name: "Sheep", color: "#7DAE8E", img: sheep, emoji: "🐑" },
    { id: "rabbit", name: "Rabbit", color: "#C87580", img: rabbit, emoji: "🐇" },
    { id: "bird", name: "Bird", color: "#4A8FC4", img: bird, emoji: "🐦" },
];

const SYMPTOMS = {
    dog:    ["Vomiting","Diarrhea","Lethargy","Loss of appetite","Excessive thirst","Limping","Coughing","Scratching/Itching","Bloated abdomen","Seizures","Difficulty breathing","Eye discharge","Ear scratching","Fever","Pale gums"],
    cat:    ["Vomiting","Diarrhea","Lethargy","Loss of appetite","Excessive grooming","Sneezing","Watery eyes","Difficulty urinating","Hiding behavior","Weight loss","Hair loss","Swollen abdomen","Limping","Coughing","Fever"],
    cow:    ["Not eating","Reduced milk production","Bloating","Limping","Nasal discharge","Coughing","Diarrhea","Fever","Labored breathing","Swollen joints","Eye discharge","Weight loss","Rough coat","Lethargy","Mastitis signs"],
    horse:  ["Colic (abdominal pain)","Lameness","Fever","Nasal discharge","Coughing","Loss of appetite","Diarrhea","Swollen legs","Eye discharge","Skin lesions","Excessive sweating","Difficulty breathing","Lethargy","Weight loss","Stiff gait"],
    goat:   ["Diarrhea","Bloating","Loss of appetite","Nasal discharge","Coughing","Limping","Fever","Weight loss","Rough coat","Lethargy","Eye discharge","Sneezing","Difficulty breathing","Skin sores","Teeth grinding"],
    sheep:  ["Limping (foot rot)","Diarrhea","Coughing","Bloating","Nasal discharge","Loss of appetite","Fever","Weight loss","Wool loss","Lethargy","Eye problems","Difficulty breathing","Swollen face","Skin lesions","Pale gums"],
    rabbit: ["Loss of appetite","Diarrhea","Lethargy","Sneezing","Nasal discharge","Eye discharge","Head tilt","Difficulty breathing","Bloated abdomen","Fur loss","Teeth grinding","Limping","Weight loss","Wet dewlap","Abnormal droppings"],
    bird:   ["Fluffed feathers","Loss of appetite","Nasal discharge","Difficulty breathing","Lethargy","Diarrhea","Vomiting","Eye discharge","Feather loss","Sneezing","Weight loss","Regurgitation","Lameness","Abnormal droppings","Head shaking"],
};

const SEV = {
    emergency: { bg:"rgba(226,75,74,0.08)",  border:"rgba(226,75,74,0.35)",  text:"#F09595", badge:"rgba(226,75,74,0.15)",  icon:"🚨", label:"Emergency" },
    moderate:  { bg:"rgba(239,159,39,0.08)", border:"rgba(239,159,39,0.35)", text:"#FAC775", badge:"rgba(239,159,39,0.15)", icon:"⚠️", label:"Moderate"  },
    mild:      { bg:"rgba(29,158,117,0.08)", border:"rgba(29,158,117,0.35)", text:"#5DCAA5", badge:"rgba(29,158,117,0.15)", icon:"✅", label:"Mild"      },
};

export default function Dashboard() {
    const { user, token } = useAuth();
    const [step, setStep]                     = useState("animal");
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [customSymptom, setCustomSymptom]   = useState("");
    const [customSymptoms, setCustomSymptoms] = useState([]);
    const [result, setResult]   = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState(null);
    const resultRef = useRef(null);

    useEffect(() => {
        if (step === "result" && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [step]);

    const selectAnimal = (a) => {
        setSelectedAnimal(a);
        setSelectedSymptoms([]);
        setCustomSymptoms([]);
        setCustomSymptom("");
        setResult(null);
        setError(null);
        setStep("symptoms");
    };

    const toggleSymptom = (s) =>
        setSelectedSymptoms((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

    const addCustom = () => {
        const t = customSymptom.trim();
        if (t && !customSymptoms.includes(t)) {
            setCustomSymptoms((p) => [...p, t]);
            setSelectedSymptoms((p) => [...p, t]);
            setCustomSymptom("");
        }
    };

    const analyze = () => {
        if (!selectedSymptoms.length) return;
        setLoading(true);
        setError(null);

        setTimeout(() => {
            try {
                const hasCustom = customSymptoms.some((c) => selectedSymptoms.includes(c));
                const treatment = getTreatment(selectedAnimal.id, selectedSymptoms);

                if (!treatment) {
                    setError("Could not find treatment info. Please try different symptoms.");
                    setLoading(false);
                    return;
                }

                setResult({ ...treatment, hasCustom });
                setStep("result");
            } catch (err) {
                setError("Something went wrong. Please try again.");
            } finally {
                setLoading(false);
            }
        }, 900);
    };

    const saveToBackend = async (treatment) => {
        if (!token) return;
        try {
            await fetch("http://localhost:5000/api/symptoms/save", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({
                    animal: selectedAnimal.name,
                    symptoms: selectedSymptoms,
                    customSymptoms,
                    condition: treatment.condition,
                    severity: treatment.severity,
                    result: treatment,
                }),
            });
        } catch {
            // Silently fail — backend save is optional
        }
    };

    const reset = () => {
        setStep("animal"); setSelectedAnimal(null);
        setSelectedSymptoms([]); setCustomSymptoms([]);
        setCustomSymptom(""); setResult(null); setError(null);
    };

    const sev = result ? SEV[result.severity] ?? SEV.mild : null;

    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            {/* 🎥 Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
                }}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* 🌑 Overlay */}
            <div style={{
                position: "fixed",
                inset: 0,
                background: "rgba(10,20,30,0.65)",
                zIndex: -1
            }} />

            {/* Main Content */}
            <div style={{ minHeight: "calc(100vh - 60px)", padding: "0 0 60px", position: "relative", zIndex: 1 }}>
                <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 20px" }}>

                    {/* Welcome */}
                    <div style={{ padding: "28px 0 4px" }}>
                        <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: 0, letterSpacing: "-0.4px" }}>
                            Hello, {user?.name?.split(" ")[0]} 👋
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "4px 0 0" }}>
                            Let's check on your animal's health today.
                        </p>
                    </div>

                    <StepBar step={step} />

                    {/* STEP 1 — Animal */}
                    {step === "animal" && (
                        <div className="fade-in">
                            <SectionHeader title="Which animal needs help?" sub="Select the type of animal to get started" />
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 14 }}>
                                {ANIMALS.map((a) => <AnimalCard key={a.id} animal={a} onClick={() => selectAnimal(a)} />)}
                            </div>
                            <Disclaimer />
                        </div>
                    )}

                    {/* STEP 2 — Symptoms */}
                    {step === "symptoms" && selectedAnimal && (
                        <div className="fade-in">
                            <div style={{ display:"flex", alignItems:"center", gap:14, margin:"24px 0 20px" }}>
                                <div style={{ width:50, height:50, borderRadius:14, background:`${selectedAnimal.color}22`, border:`1px solid ${selectedAnimal.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>
                                    {selectedAnimal.emoji}
                                </div>
                                <div>
                                    <h2 style={{ color:"#fff", fontSize:20, fontWeight:700, margin:0 }}>{selectedAnimal.name} Symptoms</h2>
                                    <p style={{ color:"rgba(255,255,255,0.4)", fontSize:13, margin:0 }}>Select all symptoms you observe</p>
                                </div>
                            </div>

                            <div style={{ display:"flex", flexWrap:"wrap", gap:9, marginBottom:22 }}>
                                {[...SYMPTOMS[selectedAnimal.id], ...customSymptoms].map((s) => {
                                    const sel = selectedSymptoms.includes(s);
                                    const isNew = customSymptoms.includes(s);
                                    return (
                                        <button key={s} onClick={() => toggleSymptom(s)} style={{
                                            padding:"8px 15px", borderRadius:100,
                                            border: sel ? `1.5px solid ${selectedAnimal.color}` : "1px solid rgba(255,255,255,0.1)",
                                            background: sel ? `${selectedAnimal.color}20` : "rgba(255,255,255,0.04)",
                                            color: sel ? "#fff" : "rgba(255,255,255,0.55)",
                                            fontSize:13, fontWeight: sel ? 500 : 400, cursor:"pointer",
                                            display:"flex", alignItems:"center", gap:5, transition:"all 0.15s",
                                        }}>
                                            {sel && <span style={{ fontSize:10 }}>✓</span>}
                                            {s}
                                            {isNew && <span style={{ fontSize:10, background:"rgba(255,255,255,0.12)", padding:"1px 6px", borderRadius:4 }}>new</span>}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Custom symptom input */}
                            <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:18, marginBottom:22 }}>
                                <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", margin:"0 0 10px", fontWeight:500 }}>Symptom not listed? Add it:</p>
                                <div style={{ display:"flex", gap:10 }}>
                                    <input
                                        value={customSymptom}
                                        onChange={(e) => setCustomSymptom(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && addCustom()}
                                        placeholder="e.g. dragging hind legs..."
                                        style={{ flex:1, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:8, padding:"10px 13px", color:"#fff", fontSize:14, outline:"none" }}
                                    />
                                    <button onClick={addCustom} style={{ background:`${selectedAnimal.color}30`, border:`1px solid ${selectedAnimal.color}50`, borderRadius:8, padding:"10px 18px", color:"#fff", cursor:"pointer", fontSize:13, fontWeight:500 }}>
                                        + Add
                                    </button>
                                </div>
                                {customSymptoms.length > 0 && (
                                    <p style={{ fontSize:12, color:"rgba(74,200,130,0.65)", margin:"8px 0 0" }}>✓ Custom symptoms added — we'll show general guidance and recommend a vet</p>
                                )}
                            </div>

                            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
                                <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                                    <button onClick={reset} style={{ background:"transparent", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, padding:"11px 18px", color:"rgba(255,255,255,0.5)", fontSize:13, cursor:"pointer" }}>← Back</button>
                                    <p style={{ margin:0, color:"rgba(255,255,255,0.35)", fontSize:13 }}>
                                        {selectedSymptoms.length ? `${selectedSymptoms.length} selected` : "No symptoms selected"}
                                    </p>
                                </div>
                                <button onClick={analyze} disabled={!selectedSymptoms.length || loading} style={{
                                    background: !selectedSymptoms.length ? "rgba(255,255,255,0.05)" : "linear-gradient(135deg, #1D9E75, #4A8FC4)",
                                    border:"none", borderRadius:10, padding:"12px 26px", color:"#fff",
                                    fontSize:15, fontWeight:600, cursor: !selectedSymptoms.length ? "not-allowed" : "pointer",
                                    opacity: !selectedSymptoms.length ? 0.4 : 1,
                                }}>
                                    {loading ? "Analyzing..." : "Get Treatment Guide →"}
                                </button>
                            </div>

                            {error && (
                                <div style={{ marginTop:14, background:"rgba(226,75,74,0.1)", border:"1px solid rgba(226,75,74,0.3)", borderRadius:10, padding:"11px 14px", color:"#E24B4A", fontSize:13 }}>
                                    ⚠️ {error}
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP 3 — Result */}
                    {step === "result" && result && (
                        <div ref={resultRef} className="fade-in">
                            {/* Severity banner */}
                            <div style={{ background:sev.bg, border:`1.5px solid ${sev.border}`, borderRadius:16, padding:"20px 22px", marginBottom:18 }}>
                                <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
                                    <div style={{ flex:1 }}>
                                        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                                            <span>{sev.icon}</span>
                                            <span style={{ background:sev.badge, border:`1px solid ${sev.border}`, color:sev.text, padding:"2px 11px", borderRadius:100, fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.5px" }}>
                                                {sev.label}
                                            </span>
                                        </div>
                                        <h2 style={{ margin:"0 0 6px", fontSize:19, fontWeight:700, color:sev.text }}>{result.condition}</h2>
                                        <p style={{ margin:0, fontSize:13.5, color:"rgba(255,255,255,0.65)", lineHeight:1.65 }}>{result.summary}</p>
                                    </div>
                                    <div style={{ background:sev.badge, border:`1px solid ${sev.border}`, borderRadius:10, padding:"10px 16px", textAlign:"center", flexShrink:0, alignSelf:"flex-start" }}>
                                        <p style={{ margin:"0 0 2px", fontSize:10, color:sev.text, fontWeight:700, textTransform:"uppercase" }}>Vet Visit</p>
                                        <p style={{ margin:0, fontSize:13, fontWeight:700, color:sev.text }}>{result.vetUrgency}</p>
                                    </div>
                                </div>
                                {result.warning && (
                                    <div style={{ marginTop:12, background:"rgba(163,45,45,0.3)", border:"1px solid rgba(226,75,74,0.3)", borderRadius:8, padding:"10px 14px", color:"#F09595", fontSize:13, display:"flex", gap:8 }}>
                                        ⚠️ {result.warning}
                                    </div>
                                )}
                            </div>

                            {/* Symptoms recap */}
                            <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"13px 16px", marginBottom:18, display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
                                <span style={{ fontSize:26 }}>{selectedAnimal.emoji}</span>
                                <div>
                                    <p style={{ margin:"0 0 5px", color:"rgba(255,255,255,0.35)", fontSize:11, fontWeight:600, textTransform:"uppercase" }}>
                                        {selectedAnimal.name} · {selectedSymptoms.length} symptom{selectedSymptoms.length !== 1 ? "s" : ""} reported
                                    </p>
                                    <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                                        {selectedSymptoms.map((s) => (
                                            <span key={s} style={{ background:"rgba(255,255,255,0.07)", borderRadius:100, padding:"2px 9px", fontSize:12, color:"rgba(255,255,255,0.65)" }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 3-col info cards */}
                            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:14, marginBottom:18 }}>
                                <InfoCard title="🩹 First Aid Steps" items={result.firstAid} accent="#4A8FC4" />
                                <InfoCard title="✅ Do's"            items={result.dos}      accent="#1D9E75" />
                                <InfoCard title="❌ Don'ts"           items={result.donts}    accent="#E24B4A" />
                            </div>

                            {/* Home care */}
                            <div style={{ background:"rgba(29,158,117,0.07)", border:"1px solid rgba(29,158,117,0.18)", borderRadius:14, padding:"17px 20px", marginBottom:18 }}>
                                <h3 style={{ margin:"0 0 9px", color:"#5DCAA5", fontSize:14, fontWeight:600 }}>🏠 Home Care Instructions</h3>
                                <p style={{ margin:0, color:"rgba(255,255,255,0.7)", fontSize:13.5, lineHeight:1.7 }}>{result.homecare}</p>
                            </div>

                            {/* Custom symptom notice */}
                            {result.hasCustom && (
                                <div style={{ background:"rgba(74,143,196,0.07)", border:"1px solid rgba(74,143,196,0.2)", borderRadius:12, padding:"13px 16px", marginBottom:18, display:"flex", gap:10 }}>
                                    <span>📋</span>
                                    <p style={{ margin:0, color:"rgba(255,255,255,0.55)", fontSize:13, lineHeight:1.6 }}>
                                        You entered a custom symptom not in our database. General guidance has been provided.{" "}
                                        <strong style={{ color:"rgba(255,255,255,0.8)" }}>Please consult a veterinarian</strong> for a precise diagnosis.
                                    </p>
                                </div>
                            )}

                            {/* Offline badge */}
                            <div style={{ background:"rgba(74,143,196,0.05)", border:"1px solid rgba(74,143,196,0.12)", borderRadius:12, padding:"10px 16px", marginBottom:18, display:"flex", gap:8, alignItems:"center" }}>
                                <span style={{ fontSize:14 }}>📚</span>
                                <p style={{ margin:0, color:"rgba(255,255,255,0.35)", fontSize:12 }}>Treatment information sourced from our built-in veterinary knowledge base. Works fully offline.</p>
                            </div>

                            {/* Action buttons */}
                            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                                <button
                                    onClick={() => window.open("https://www.google.com/maps/search/veterinary+hospital+near+me","_blank")}
                                    style={{ flex:1, minWidth:170, background:"linear-gradient(135deg, #E24B4A, #C93B3A)", border:"none", borderRadius:12, padding:"13px 20px", color:"#fff", fontSize:14, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:7 }}
                                >
                                    📍 Find Nearby Vet
                                </button>
                                <button onClick={() => { setStep("symptoms"); setResult(null); }} style={ghostBtn}>← Change Symptoms</button>
                                <button onClick={reset} style={ghostBtn}>+ New Assessment</button>
                            </div>

                            <p style={{ color:"rgba(255,255,255,0.2)", fontSize:11.5, lineHeight:1.6, marginTop:22, textAlign:"center" }}>
                                ⚕️ This information is for guidance only and is not a substitute for professional veterinary care. Always consult a licensed veterinarian for diagnosis and treatment.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {loading && <LoadingOverlay />}
        </div>
    );
}

/* ── Sub-components ── */

function StepBar({ step }) {
    const steps  = ["animal","symptoms","result"];
    const labels = ["Select Animal","Choose Symptoms","View Treatment"];
    const cur    = steps.indexOf(step);
    return (
        <div style={{ display:"flex", alignItems:"center", gap:8, padding:"20px 0 8px", justifyContent:"center" }}>
            {labels.map((lbl, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                        <div style={{ width:22, height:22, borderRadius:"50%", background: i < cur ? "#1D9E75" : i === cur ? "#4A8FC4" : "rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:"#fff", fontWeight:700 }}>
                            {i < cur ? "✓" : i + 1}
                        </div>
                        <span style={{ fontSize:12, color: i === cur ? "#fff" : "rgba(255,255,255,0.35)", fontWeight: i === cur ? 500 : 400 }}>{lbl}</span>
                    </div>
                    {i < 2 && <div style={{ width:28, height:1, background:"rgba(255,255,255,0.08)" }} />}
                </div>
            ))}
        </div>
    );
}

function SectionHeader({ title, sub }) {
    return (
        <div style={{ textAlign:"center", margin:"24px 0 22px" }}>
            <h2 style={{ color:"#fff", fontSize:24, fontWeight:700, margin:"0 0 6px", letterSpacing:"-0.4px" }}>{title}</h2>
            <p style={{ color:"rgba(255,255,255,0.4)", fontSize:14, margin:0 }}>{sub}</p>
        </div>
    );
}

// Enhanced AnimalCard with image support from first snippet
function AnimalCard({ animal, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "relative",
                height: 160,
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                border: hovered
                    ? `1px solid ${animal.color}`
                    : "1px solid rgba(255,255,255,0.1)",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
            }}
        >
            {/* IMAGE or FALLBACK */}
            {animal.img ? (
                <img
                    src={animal.img}
                    alt={animal.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            ) : (
                <div style={{
                    width: "100%",
                    height: "100%",
                    background: animal.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 48,
                }}>
                    {animal.emoji}
                </div>
            )}

            {/* OVERLAY GRADIENT */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
            }} />

            {/* ANIMAL NAME */}
            <div style={{
                position: "absolute",
                bottom: 10,
                left: 12,
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}>
                {animal.name}
            </div>
        </div>
    );
}

function InfoCard({ title, items, accent }) {
    return (
        <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:17, position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:accent }} />
            <h3 style={{ margin:"0 0 13px", fontSize:13.5, fontWeight:600, color:"#fff" }}>{title}</h3>
            <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
                {items?.map((item, i) => (
                    <li key={i} style={{ display:"flex", gap:9, alignItems:"flex-start" }}>
                        <span style={{ width:19, height:19, borderRadius:"50%", flexShrink:0, background:`${accent}20`, border:`1px solid ${accent}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:accent, fontWeight:700, marginTop:1 }}>{i+1}</span>
                        <span style={{ color:"rgba(255,255,255,0.65)", fontSize:12.5, lineHeight:1.55 }}>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Disclaimer() {
    return (
        <div style={{ marginTop:36, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.05)", borderRadius:12, padding:"13px 16px", display:"flex", gap:10 }}>
            <span style={{ fontSize:16, flexShrink:0 }}>ℹ️</span>
            <p style={{ margin:0, color:"rgba(255,255,255,0.3)", fontSize:12, lineHeight:1.6 }}>
                VetAI provides general first-aid guidance only and works fully offline. Always consult a licensed veterinarian for accurate diagnosis and treatment.
            </p>
        </div>
    );
}

function LoadingOverlay() {
    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(15,25,35,0.88)", backdropFilter:"blur(8px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:999, flexDirection:"column", gap:20 }}>
            <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }`}</style>
            <div style={{ display:"flex", gap:9 }}>
                {["#1D9E75","#4A8FC4","#E24B4A"].map((c,i) => (
                    <div key={i} style={{ width:12, height:12, borderRadius:"50%", background:c, animation:`bounce 1.2s ${i*0.2}s ease-in-out infinite` }} />
                ))}
            </div>
            <p style={{ color:"rgba(255,255,255,0.55)", fontSize:14, margin:0 }}>Looking up treatment information…</p>
        </div>
    );
}

const ghostBtn = {
    flex:1, minWidth:170,
    background:"rgba(255,255,255,0.05)",
    border:"1px solid rgba(255,255,255,0.09)",
    borderRadius:12, padding:"13px 20px",
    color:"rgba(255,255,255,0.7)", fontSize:14, fontWeight:500, cursor:"pointer",
};