// ─────────────────────────────────────────────────────────────────────────────
// VetAI — Offline Treatment Database
// Covers: Dog, Cat, Cow, Horse, Goat, Sheep, Rabbit, Bird
// Each entry: condition, severity, summary, firstAid, dos, donts,
//             vetRequired, vetUrgency, homecare, warning
// ─────────────────────────────────────────────────────────────────────────────

export const TREATMENT_DB = {

    // ══════════════════════════════════════════════════════
    //  DOG
    // ══════════════════════════════════════════════════════
    dog: {
        "Vomiting": {
            condition: "Gastritis / Dietary Indiscretion",
            severity: "moderate",
            summary: "Vomiting in dogs is commonly caused by eating something inappropriate, a sudden diet change, or gastric irritation. While occasional vomiting may resolve on its own, repeated vomiting or blood in vomit requires urgent veterinary attention.",
            firstAid: ["Withhold food for 12–24 hours to rest the stomach", "Offer small sips of clean water every 30 minutes to prevent dehydration", "Monitor for blood in vomit, pale gums, or extreme lethargy"],
            dos: ["Keep the dog calm and comfortable", "Reintroduce food slowly with bland diet (boiled chicken + plain rice)", "Record how many times the dog vomited and what it looked like"],
            donts: ["Don't give human anti-nausea medications", "Don't force feed the dog", "Don't ignore vomiting that lasts more than 24 hours"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Rest the stomach by withholding food for 12 hours. After vomiting stops, offer small amounts of boiled plain rice with boiled chicken (no salt/spices). Gradually return to normal food over 2–3 days. Ensure fresh water is always available.",
            warning: ""
        },
        "Diarrhea": {
            condition: "Acute Gastroenteritis",
            severity: "moderate",
            summary: "Diarrhea in dogs is usually caused by dietary changes, infections, parasites, or stress. Mild cases resolve within 1–2 days with supportive care, but severe or bloody diarrhea needs immediate vet attention.",
            firstAid: ["Provide clean, fresh water at all times to prevent dehydration", "Temporarily switch to a bland diet (boiled rice and chicken)", "Monitor stool frequency and look for blood or mucus"],
            dos: ["Feed small, frequent bland meals", "Add plain canned pumpkin (not pie filling) to food — natural fiber", "Keep the dog indoors and monitor closely"],
            donts: ["Don't give human anti-diarrhea medication like Imodium without vet advice", "Don't ignore diarrhea lasting more than 48 hours", "Don't feed fatty or spicy food"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Fast the dog for 12 hours then feed bland food (rice + boiled chicken) in small portions 3–4 times a day. Ensure hydration. If diarrhea persists beyond 2 days or contains blood, seek vet care.",
            warning: ""
        },
        "Lethargy": {
            condition: "General Weakness / Systemic Illness",
            severity: "moderate",
            summary: "Lethargy in dogs can be a sign of many underlying conditions including infection, pain, anemia, or organ disease. A dog that is unusually tired or unwilling to move should be assessed by a vet promptly.",
            firstAid: ["Ensure the dog is comfortable and resting in a quiet place", "Offer water and observe if the dog is drinking", "Check for other symptoms like vomiting, pale gums, or difficulty breathing"],
            dos: ["Keep the dog warm and calm", "Monitor food and water intake", "Note any other behavioral changes"],
            donts: ["Don't force the dog to exercise", "Don't ignore lethargy lasting more than 24 hours", "Don't self-medicate"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide a quiet, comfortable resting space. Ensure the dog has access to water. Watch for worsening symptoms. If the dog hasn't eaten in more than 24 hours or the lethargy worsens, consult a vet.",
            warning: ""
        },
        "Seizures": {
            condition: "Epilepsy / Neurological Emergency",
            severity: "emergency",
            summary: "Seizures in dogs indicate a serious neurological event and require immediate veterinary attention. They can be caused by epilepsy, poisoning, brain injury, or metabolic disease.",
            firstAid: ["Keep the dog away from furniture and stairs to prevent injury", "Do NOT restrain the dog during a seizure — you may get bitten", "Time the seizure — if it lasts more than 5 minutes, rush to emergency vet immediately", "After the seizure, keep the dog calm in a darkened quiet room"],
            dos: ["Stay calm and protect the dog from its surroundings", "Note the start time and duration", "Keep a log of seizure frequency"],
            donts: ["Don't put your hand in the dog's mouth", "Don't restrain the dog", "Don't leave the dog alone immediately after a seizure"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "After the seizure ends, the dog may be confused, disoriented, or temporarily blind. Keep the environment quiet and dim. Do not offer food for at least 1 hour post-seizure. Get to a vet as soon as possible.",
            warning: "🚨 If the seizure lasts more than 5 minutes (status epilepticus) or seizures occur back to back, this is a life-threatening emergency. Rush to the nearest emergency animal hospital immediately."
        },
        "Bloated abdomen": {
            condition: "Gastric Dilatation-Volvulus (GDV) / Bloat",
            severity: "emergency",
            summary: "A bloated abdomen in dogs, especially large breeds, can indicate GDV — a life-threatening condition where the stomach twists. This requires immediate emergency surgery.",
            firstAid: ["Rush to an emergency vet immediately — do not wait", "Keep the dog as calm and still as possible", "Do not attempt to relieve the bloating at home"],
            dos: ["Act immediately — time is critical", "Keep the dog warm during transport", "Call ahead to the vet so they can prepare"],
            donts: ["Don't feed or give water", "Don't massage the abdomen", "Don't delay — every minute matters"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home care for suspected GDV. This is a surgical emergency. Transport to a vet immediately.",
            warning: "🚨 GDV is fatal within hours if untreated. A hard, distended abdomen with unproductive retching is a critical emergency. Rush to the nearest animal hospital NOW."
        },
        "Difficulty breathing": {
            condition: "Respiratory Distress",
            severity: "emergency",
            summary: "Difficulty breathing in a dog is always an emergency. It can be caused by heart disease, fluid in the lungs, an airway obstruction, or severe allergic reaction.",
            firstAid: ["Keep the dog calm and still — excitement worsens breathing difficulty", "Do not muzzle the dog", "Get to an emergency vet immediately"],
            dos: ["Keep the environment cool and well-ventilated", "Minimize stress during transport", "Call the vet ahead so they can prepare oxygen"],
            donts: ["Don't muzzle the dog", "Don't force the dog to walk", "Don't delay seeking help"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "No home care is safe for respiratory distress. This is an emergency requiring oxygen support and diagnostics at a veterinary facility.",
            warning: "🚨 Blue/purple gums (cyanosis) indicates severe oxygen deprivation. This is immediately life-threatening. Rush to emergency care NOW."
        },
        "Limping": {
            condition: "Musculoskeletal Injury / Sprain",
            severity: "mild",
            summary: "Limping in dogs is usually caused by a minor sprain, cut on the paw, or muscle strain. However, persistent limping or non-weight-bearing warrants veterinary examination to rule out fractures or joint disease.",
            firstAid: ["Examine the paw gently for cuts, thorns, or swelling", "If a wound is found, clean gently with saline solution", "Restrict the dog's activity and prevent jumping"],
            dos: ["Rest the dog for 24–48 hours", "Apply a cold compress for 10 minutes if swelling is present", "Check paw pads for injuries"],
            donts: ["Don't give human pain relievers like ibuprofen or aspirin — toxic to dogs", "Don't ignore limping that doesn't improve in 48 hours", "Don't let the dog run or jump"],
            vetRequired: false,
            vetUrgency: "Within a week",
            homecare: "Restrict exercise to short leash walks only. Check the paw for any foreign objects or cuts. Apply a cold compress for swelling. If limping persists beyond 2 days or the dog refuses to put any weight on the leg, consult a vet.",
            warning: ""
        },
        "Coughing": {
            condition: "Kennel Cough (Infectious Tracheobronchitis)",
            severity: "mild",
            summary: "Coughing in dogs is most commonly caused by kennel cough, a highly contagious respiratory infection. It usually resolves on its own in 1–2 weeks but can become serious in puppies or elderly dogs.",
            firstAid: ["Keep the dog isolated from other dogs to prevent spread", "Use a harness instead of a collar to reduce throat irritation", "Ensure the dog is warm and resting"],
            dos: ["Provide steam (run hot shower in bathroom and sit with dog for 10 min)", "Keep the environment humidified", "Ensure fresh water is available at all times"],
            donts: ["Don't use a collar — use a harness", "Don't take the dog to dog parks while coughing", "Don't ignore coughing that produces blood or is accompanied by difficulty breathing"],
            vetRequired: false,
            vetUrgency: "If symptoms persist",
            homecare: "Provide rest, warmth, and fresh water. A teaspoon of honey can soothe the throat. Use a harness for walks. Isolate from other dogs. If coughing is severe or lasts more than 2 weeks, see a vet for antibiotics.",
            warning: ""
        },
        "Fever": {
            condition: "Pyrexia (Fever)",
            severity: "moderate",
            summary: "A fever in dogs (temperature above 39.5°C / 103°F) indicates the immune system is fighting infection or inflammation. The underlying cause must be identified by a veterinarian.",
            firstAid: ["Apply cool (not cold) wet cloths to the dog's paw pads and groin area", "Offer small amounts of cool water", "Take the dog's temperature if possible — normal is 38–39.5°C (101–103°F)"],
            dos: ["Keep the dog cool and comfortable", "Monitor temperature every hour", "Encourage the dog to drink water"],
            donts: ["Don't give human fever-reducing medications like paracetamol — fatal to dogs", "Don't use ice-cold water — can cause shock", "Don't ignore a temperature above 40°C (104°F)"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Keep the dog in a cool, ventilated area. Apply cool wet towels to the paw pads. Offer fresh water. Do not use human fever medications. If the fever exceeds 40°C (104°F) or lasts more than 24 hours, seek veterinary care.",
            warning: ""
        },
        "Pale gums": {
            condition: "Anemia / Internal Bleeding",
            severity: "emergency",
            summary: "Pale, white, or grey gums indicate that the dog may have severe anemia, internal bleeding, shock, or poisoning. This requires immediate emergency veterinary attention.",
            firstAid: ["Keep the dog warm and absolutely still", "Rush to emergency vet immediately", "Do not give food or water"],
            dos: ["Keep the dog as calm as possible", "Cover with a blanket to maintain body temperature", "Call the vet immediately"],
            donts: ["Don't delay getting to the vet", "Don't give any medications", "Don't let the dog exert itself"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home treatment. Pale gums are a sign of a critical, life-threatening condition requiring immediate professional care.",
            warning: "🚨 Pale or white gums are a medical emergency indicating shock or severe blood loss. Rush to an emergency vet NOW."
        },
        "Scratching/Itching": {
            condition: "Allergic Dermatitis / Flea Infestation",
            severity: "mild",
            summary: "Excessive scratching or itching in dogs is usually caused by fleas, allergies (food or environmental), or skin infections. Regular flea treatment and identifying allergens can resolve most cases.",
            firstAid: ["Check the dog's coat for fleas or flea dirt (tiny black specks)", "Bathe with a gentle oatmeal-based dog shampoo", "Prevent the dog from scratching wounds open"],
            dos: ["Apply a vet-recommended flea treatment", "Use a dog-safe anti-itch spray for temporary relief", "Check for hot spots or open sores"],
            donts: ["Don't use human hydrocortisone cream excessively", "Don't let the dog scratch wounds open", "Don't ignore itching that leads to hair loss or skin wounds"],
            vetRequired: false,
            vetUrgency: "If symptoms persist",
            homecare: "Apply flea treatment and wash bedding in hot water. Bathe the dog with oatmeal shampoo. Consider a food trial if allergies are suspected. If itching is severe or skin is broken, see a vet for prescription treatment.",
            warning: ""
        },
        "Eye discharge": {
            condition: "Conjunctivitis / Eye Infection",
            severity: "mild",
            summary: "Eye discharge in dogs can be caused by conjunctivitis, allergies, a foreign object, or a blocked tear duct. Clear discharge is usually less concerning than yellow-green discharge.",
            firstAid: ["Gently clean around the eye with a damp cotton ball", "Use a saline eyewash to rinse if available", "Prevent the dog from rubbing its eye"],
            dos: ["Keep the eye area clean", "Use an Elizabethan collar (cone) if the dog is pawing at the eye", "Monitor for worsening redness or swelling"],
            donts: ["Don't use human eye drops", "Don't ignore yellow-green discharge — sign of infection", "Don't let the dog scratch or rub the eye"],
            vetRequired: false,
            vetUrgency: "Within a week",
            homecare: "Clean the eye area with warm saline-soaked cotton wool twice a day. If discharge is clear and mild, monitor for improvement. Yellow-green discharge, swelling, or the dog holding the eye closed requires veterinary examination.",
            warning: ""
        },
        "Ear scratching": {
            condition: "Otitis Externa (Ear Infection)",
            severity: "mild",
            summary: "Dogs frequently develop ear infections due to bacteria, yeast, allergies, or ear mites. Symptoms include scratching, head shaking, odor, and dark discharge from the ear.",
            firstAid: ["Gently clean the outer ear with a vet-approved ear cleaner", "Do not insert anything deep into the ear canal", "Prevent the dog from scratching the ear to avoid injury"],
            dos: ["Clean ears gently with a cotton ball and ear cleaner", "Keep ears dry after bathing or swimming", "Check ears weekly for smell or discharge"],
            donts: ["Don't use cotton swabs inside the ear canal", "Don't use hydrogen peroxide or alcohol in the ear", "Don't ignore ear infections — they can become severe"],
            vetRequired: false,
            vetUrgency: "Within a week",
            homecare: "Use a vet-recommended ear cleaner to gently clean the outer ear. Keep the ear dry. If the ear smells bad, has dark discharge, or the dog is in obvious pain, take to a vet for prescription ear drops.",
            warning: ""
        },
        "Excessive thirst": {
            condition: "Diabetes / Kidney Disease / Cushing's Syndrome",
            severity: "moderate",
            summary: "Excessive thirst and urination in dogs can signal diabetes mellitus, kidney failure, Cushing's syndrome, or other hormonal disorders. Blood and urine tests are needed for diagnosis.",
            firstAid: ["Ensure fresh water is always available", "Do not restrict water intake", "Monitor how much the dog is drinking and urinating"],
            dos: ["Record water intake over 24 hours", "Note any changes in appetite or urination frequency", "Keep a log to share with the vet"],
            donts: ["Don't restrict water", "Don't ignore this symptom — it's rarely normal", "Don't wait weeks to see a vet"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Ensure constant access to clean water. Do not restrict water as this can lead to dangerous dehydration. Monitor and log water intake. A vet will need to run blood and urine tests to identify the underlying cause.",
            warning: ""
        },
    },

    // ══════════════════════════════════════════════════════
    //  CAT
    // ══════════════════════════════════════════════════════
    cat: {
        "Vomiting": {
            condition: "Hairball / Gastritis",
            severity: "mild",
            summary: "Cats vomit fairly often, usually due to hairballs, eating too fast, or mild gastrointestinal upset. Occasional vomiting is normal, but frequent vomiting or blood in vomit requires vet attention.",
            firstAid: ["Withhold food for 2–4 hours to rest the stomach", "Offer small amounts of water to prevent dehydration", "Check if the vomit contains a hairball, blood, or foreign material"],
            dos: ["Feed a hairball-control diet or give hairball remedy paste", "Feed smaller, more frequent meals", "Keep the cat indoors and calm"],
            donts: ["Don't give human anti-nausea medication", "Don't ignore vomiting more than 3 times in one day", "Don't ignore blood in vomit"],
            vetRequired: false,
            vetUrgency: "If symptoms persist",
            homecare: "Fast the cat for 2–3 hours then offer small amounts of bland food. Use a hairball remedy paste 2–3 times a week for prevention. If vomiting is frequent, contains blood, or the cat is weak, see a vet.",
            warning: ""
        },
        "Difficulty urinating": {
            condition: "Feline Urinary Obstruction / FLUTD",
            severity: "emergency",
            summary: "A cat straining to urinate or producing little to no urine may have a urinary blockage — a life-threatening emergency, especially in male cats. The bladder can rupture within 24–48 hours if untreated.",
            firstAid: ["Rush to an emergency vet immediately", "Do not attempt to express the bladder at home", "Keep the cat calm during transport"],
            dos: ["Act immediately", "Note when the cat last urinated successfully", "Call ahead to the vet"],
            donts: ["Don't wait and see", "Don't give any medications", "Don't restrict water"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home treatment for urinary obstruction. This is a medical emergency requiring immediate catheterization at a veterinary clinic.",
            warning: "🚨 Male cats with urinary blockage can die within 24–48 hours without treatment. If your cat is crying in the litter box and producing no urine, go to an emergency vet RIGHT NOW."
        },
        "Hiding behavior": {
            condition: "Pain / Illness / Extreme Stress",
            severity: "moderate",
            summary: "Cats instinctively hide when they are sick, in pain, or severely stressed. Sudden hiding behavior that is out of character is a significant warning sign that something is wrong.",
            firstAid: ["Do not force the cat out of hiding — this increases stress", "Check the cat's breathing and look for obvious injuries", "Offer food and water near the hiding spot"],
            dos: ["Allow the cat to come out on its own terms", "Keep the environment quiet", "Monitor for other symptoms like not eating or labored breathing"],
            donts: ["Don't force the cat out", "Don't ignore hiding that lasts more than 24 hours", "Don't make sudden loud noises"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide a quiet, calm environment. Place food, water, and litter near the hiding spot. Gently coax the cat out for examination. If hiding continues for more than 24 hours or other symptoms develop, see a vet.",
            warning: ""
        },
        "Sneezing": {
            condition: "Feline Upper Respiratory Infection (Cat Flu)",
            severity: "mild",
            summary: "Sneezing in cats is most commonly caused by feline herpesvirus or calicivirus (cat flu). It is highly contagious among cats. Most cases resolve within 7–10 days with supportive care.",
            firstAid: ["Isolate from other cats to prevent spread", "Gently clean nasal discharge with damp cotton wool", "Keep the cat warm and comfortable"],
            dos: ["Offer warm, strong-smelling food to encourage eating (cats may lose appetite when they can't smell)", "Run a humidifier or take the cat into a steamy bathroom", "Ensure constant access to fresh water"],
            donts: ["Don't give human cold medications", "Don't ignore if the cat stops eating entirely for more than 2 days", "Don't allow contact with other cats"],
            vetRequired: false,
            vetUrgency: "If symptoms persist",
            homecare: "Keep the cat warm and hydrated. Warm up wet food to increase smell and encourage eating. Wipe away nasal discharge. If sneezing is severe, the cat has eye discharge, or stops eating, see a vet for antiviral treatment.",
            warning: ""
        },
        "Watery eyes": {
            condition: "Conjunctivitis / Herpesvirus Eye Infection",
            severity: "mild",
            summary: "Watery or crusty eyes in cats are commonly caused by feline herpesvirus, conjunctivitis, or allergies. Yellow-green discharge indicates bacterial infection requiring antibiotic eye drops.",
            firstAid: ["Clean around the eye with damp cotton wool", "Use saline eye wash if available", "Prevent the cat from scratching the eye"],
            dos: ["Keep eyes clean and free of crust", "Use an Elizabethan collar if cat is pawing at eyes", "Monitor for worsening or spreading to both eyes"],
            donts: ["Don't use human eye drops", "Don't let the cat scratch the eye", "Don't ignore green-yellow discharge"],
            vetRequired: false,
            vetUrgency: "Within a week",
            homecare: "Clean the eye area twice daily with warm saline cotton. If discharge is clear and mild, monitor for a week. Yellow-green discharge, swollen eyelids, or the cat squinting and keeping the eye closed all require vet treatment.",
            warning: ""
        },
        "Weight loss": {
            condition: "Hyperthyroidism / Diabetes / Intestinal Disease",
            severity: "moderate",
            summary: "Unexplained weight loss in cats, especially when still eating well, is a serious sign. Common causes include hyperthyroidism (especially in older cats), diabetes, cancer, or inflammatory bowel disease.",
            firstAid: ["Ensure the cat is eating and drinking regularly", "Weigh the cat and record the result", "Monitor for other symptoms like increased thirst or vomiting"],
            dos: ["Offer high-quality, high-protein food", "Weigh the cat weekly to track progression", "Book a vet appointment promptly"],
            donts: ["Don't ignore progressive weight loss", "Don't change diet drastically without vet guidance", "Don't assume it's normal in older cats"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Ensure the cat is eating high-quality food and drinking well. Note any changes in appetite, thirst, or behavior. Weight loss in cats is rarely normal and requires blood tests to identify the cause.",
            warning: ""
        },
        "Lethargy": {
            condition: "Systemic Illness / Infection / Anemia",
            severity: "moderate",
            summary: "A lethargic cat that doesn't want to move, play, or interact may be suffering from infection, anemia, pain, or organ disease. Any unusual tiredness lasting more than 24 hours warrants veterinary assessment.",
            firstAid: ["Provide a quiet, warm, comfortable resting area", "Offer food and water and monitor intake", "Check for other symptoms including pale gums, vomiting, or difficulty breathing"],
            dos: ["Keep the cat warm and stress-free", "Monitor eating and drinking", "Check gum color — should be pink and moist"],
            donts: ["Don't force activity", "Don't ignore lethargy beyond 24 hours", "Don't self-medicate"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide a warm, quiet resting area with food and water nearby. If the cat hasn't eaten in 24 hours, is breathing oddly, or has pale gums, this is urgent — seek veterinary care promptly.",
            warning: ""
        },
        "Hair loss": {
            condition: "Over-grooming / Ringworm / Allergies",
            severity: "mild",
            summary: "Hair loss in cats can result from over-grooming due to stress, allergies, ringworm fungal infection, or parasites. Ringworm is contagious to humans.",
            firstAid: ["Examine the bald patches for redness, scaling, or circular patterns (ringworm)", "Wear gloves when handling if ringworm is suspected", "Reduce environmental stressors"],
            dos: ["Keep the affected area clean", "Consult a vet for antifungal treatment if ringworm is suspected", "Identify and address stress triggers"],
            donts: ["Don't let other pets or children contact bald patches until examined", "Don't ignore spreading bald patches", "Don't use human antifungal creams without vet advice"],
            vetRequired: true,
            vetUrgency: "Within a week",
            homecare: "Keep the affected areas clean. If circular scaly bald patches appear, isolate the cat and see a vet — ringworm requires prescription antifungal treatment. For stress-related over-grooming, provide enrichment and reduce environmental changes.",
            warning: ""
        },
        "Fever": {
            condition: "Bacterial / Viral Infection",
            severity: "moderate",
            summary: "A cat with a fever (temperature above 39.5°C / 103.1°F) is fighting an infection or inflammation. Common causes include cat flu, abscesses from bite wounds, or urinary tract infections.",
            firstAid: ["Move the cat to a cool area", "Apply a cool damp cloth to the paw pads", "Encourage water intake"],
            dos: ["Offer fresh cool water frequently", "Monitor temperature if a thermometer is available", "Keep the cat quiet and stress-free"],
            donts: ["Never give paracetamol, ibuprofen, or aspirin to cats — these are FATAL", "Don't use ice-cold water", "Don't ignore a fever above 40°C (104°F)"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Keep the cat cool and well-hydrated. Apply cool damp cloths to the paw pads. Never give human pain relievers or fever reducers to cats as they are toxic. A vet will prescribe appropriate treatment after identifying the underlying cause.",
            warning: "⚠️ Paracetamol (acetaminophen) is FATAL to cats even in tiny doses. Never give any human pain medication to a cat."
        },
        "Loss of appetite": {
            condition: "Hepatic Lipidosis Risk / Underlying Illness",
            severity: "moderate",
            summary: "Cats that stop eating for more than 24–48 hours are at high risk of hepatic lipidosis (fatty liver disease), which can be fatal. Unlike dogs, cats cannot safely fast. Finding and treating the underlying cause quickly is critical.",
            firstAid: ["Try warming up wet food to increase aroma", "Offer different food textures and flavors", "Syringe small amounts of water if the cat refuses to drink"],
            dos: ["Try offering tuna water or low-sodium broth to entice eating", "Hand feed if necessary", "Contact a vet if not eating for more than 24 hours"],
            donts: ["Don't allow a cat to go without food for more than 48 hours", "Don't force-feed large amounts at once", "Don't wait a week to see if the cat starts eating again"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Try different food types, warm the food, and offer enticing flavors. If the cat hasn't eaten in 24 hours, contact a vet. Cats are extremely vulnerable to fatty liver disease from even short-term anorexia.",
            warning: ""
        },
        "Coughing": {
            condition: "Feline Asthma / Bronchitis",
            severity: "moderate",
            summary: "Cats with feline asthma crouch low, extend their neck, and cough with a characteristic wheezing sound. It can be triggered by stress, allergens, or cold air. Severe asthma attacks can be life-threatening.",
            firstAid: ["Keep the cat calm and in a well-ventilated area", "Remove potential triggers (sprays, dusty litter, smoke, candles)", "If the cat is blue around the lips, go to emergency vet immediately"],
            dos: ["Switch to dust-free litter", "Avoid aerosol sprays, air fresheners, and cigarette smoke", "Ask a vet about corticosteroid treatment"],
            donts: ["Don't smoke around the cat", "Don't use aerosol sprays in the home", "Don't ignore a cat that coughs regularly"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Remove environmental triggers such as dust, sprays, and smoke. Use dust-free litter. If attacks are frequent, a vet can prescribe a bronchodilator inhaler for cats. During a mild attack, keep the cat calm and in fresh air.",
            warning: ""
        },
    },

    // ══════════════════════════════════════════════════════
    //  COW
    // ══════════════════════════════════════════════════════
    cow: {
        "Bloating": {
            condition: "Ruminal Tympany (Bloat)",
            severity: "emergency",
            summary: "Bloat in cattle occurs when gas accumulates in the rumen and cannot escape. Frothy bloat (from legume pastures) and free-gas bloat are common forms. Severe cases can cause death within hours from pressure on the diaphragm.",
            firstAid: ["Move the cow away from the pasture immediately", "For mild cases, walk the cow gently to stimulate belching", "Position the cow with front legs higher than back legs on a slope", "For frothy bloat, give vegetable oil or a commercial anti-bloat agent if available (250–500ml)"],
            dos: ["Call a vet immediately for severe cases", "Keep the cow calm and moving gently", "Use a stomach tube to release gas if trained to do so"],
            donts: ["Don't allow the cow to continue grazing on lush pasture", "Don't leave a bloated cow unattended", "Don't attempt trocar puncture without veterinary training"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "For mild bloat, walking the cow, withholding lush feed, and giving anti-bloat oil can help. Severe or frothy bloat requires immediate veterinary intervention. Prevent by limiting access to lush legume pastures.",
            warning: "🚨 Severe bloat can kill a cow within 1–2 hours. If the left flank is extremely distended and the cow is in distress, call a vet immediately."
        },
        "Mastitis signs": {
            condition: "Mastitis (Udder Infection)",
            severity: "moderate",
            summary: "Mastitis is inflammation of the udder, usually caused by bacterial infection. It is the most common and costly disease in dairy cattle. Signs include hot, swollen, painful quarters and abnormal milk (clots, watery, or bloody).",
            firstAid: ["Strip out the affected quarter several times a day to remove infected milk", "Apply a warm compress to reduce swelling and pain", "Keep the udder clean and dry"],
            dos: ["Milk the affected quarter frequently (at least 3–4 times per day)", "Use intramammary antibiotics prescribed by a vet", "Isolate the cow from healthy herd members during treatment"],
            donts: ["Don't discard milk without notifying the vet about withdrawal periods", "Don't ignore mastitis — it leads to permanent udder damage", "Don't stop treatment early"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Frequent stripping of the infected quarter, warm compresses, and maintaining udder hygiene are key home care steps. A vet will prescribe appropriate antibiotics. Early treatment prevents permanent damage.",
            warning: ""
        },
        "Not eating": {
            condition: "Traumatic Reticuloperitonitis (Hardware Disease) / Systemic Illness",
            severity: "moderate",
            summary: "A cow that stops eating may have hardware disease (swallowed a metal object puncturing the reticulum), ketosis, acidosis, or other systemic illness. This is a serious sign requiring prompt veterinary diagnosis.",
            firstAid: ["Provide fresh water and high-quality forage", "Check for other symptoms like humped back, grunting, or dropping milk production", "Separate from herd and monitor closely"],
            dos: ["Monitor temperature (normal cow: 38–39°C)", "Check for other signs of pain", "Call a vet promptly"],
            donts: ["Don't force feed", "Don't ignore a cow off feed for more than 24 hours", "Don't assume it will resolve on its own"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide access to fresh water and good quality hay. Monitor other vital signs. A cow not eating for more than 24 hours requires veterinary examination to identify the underlying cause.",
            warning: ""
        },
        "Reduced milk production": {
            condition: "Mastitis / Metabolic Disease / Nutritional Deficiency",
            severity: "moderate",
            summary: "Sudden drop in milk production in dairy cows usually indicates mastitis, ketosis (particularly around calving), or nutritional deficiencies. It can also occur with fever or systemic infection.",
            firstAid: ["Check udder for signs of mastitis (heat, swelling, abnormal milk)", "Monitor the cow's body condition and feed intake", "Ensure access to fresh water and a balanced ration"],
            dos: ["Test milk from each quarter for mastitis (California Mastitis Test)", "Check the cow's body condition score", "Review the feeding programme with a nutritionist"],
            donts: ["Don't ignore drops of more than 20% of normal production", "Don't supplement with excessive concentrates without forage", "Don't delay treatment for mastitis"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Check all four quarters for mastitis. Ensure adequate energy and balanced nutrition. If mastitis is confirmed, begin treatment promptly. Blood tests may be needed to rule out ketosis or other metabolic causes.",
            warning: ""
        },
        "Diarrhea": {
            condition: "Bovine Viral Diarrhea (BVD) / Salmonella / Nutritional Scours",
            severity: "moderate",
            summary: "Diarrhea in cattle can result from infections (salmonella, BVD, E. coli in calves), parasites, or dietary changes. Calf scours are a leading cause of calf death and must be treated aggressively.",
            firstAid: ["Ensure the animal has constant access to clean water", "For calves, provide oral rehydration salts (ORS) immediately", "Separate the affected animal from the herd"],
            dos: ["Provide oral electrolytes every 4–6 hours to calves", "Monitor hydration (pinch test on neck skin — should spring back quickly)", "Record the colour and consistency of stool"],
            donts: ["Don't withhold milk from scouring calves — this worsens dehydration", "Don't use antibiotics without vet guidance", "Don't ignore blood in diarrhea"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Maintain hydration with oral rehydration solutions. Separate the affected animal. For calves, continue milk feeding alongside ORS. A vet should examine to identify the cause and prescribe appropriate treatment.",
            warning: ""
        },
        "Fever": {
            condition: "Respiratory Disease / Footrot / Systemic Infection",
            severity: "moderate",
            summary: "Fever in cattle (temperature above 39.5°C / 103°F) usually accompanies infectious disease such as pneumonia, footrot, or other bacterial infections. Prompt identification of the source is important.",
            firstAid: ["Move the animal to a shaded, well-ventilated area", "Ensure access to fresh water", "Take rectal temperature to confirm fever"],
            dos: ["Isolate from herd", "Monitor breathing rate and other symptoms", "Call vet for diagnosis and anti-inflammatory/antibiotic treatment"],
            donts: ["Don't give human medications", "Don't ignore fever above 40°C (104°F)", "Don't delay treatment in high-producing dairy cows"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide shade, ventilation, and fresh water. A vet will need to examine and prescribe anti-inflammatory drugs and possibly antibiotics depending on the diagnosis.",
            warning: ""
        },
        "Limping": {
            condition: "Footrot / Laminitis / Hoof Abscess",
            severity: "moderate",
            summary: "Lameness in cattle is most commonly due to footrot (foul smell between toes), laminitis, or hoof abscesses. It significantly reduces productivity and welfare and requires prompt treatment.",
            firstAid: ["Examine the hoof carefully for foul smell, swelling between claws, or abscess", "Clean the hoof with clean water", "Move the cow to a clean, dry surface"],
            dos: ["Trim hoof and clean wound if footrot is suspected", "Apply a foot bath with copper sulfate or zinc sulfate", "Call a vet for antibiotic treatment of footrot"],
            donts: ["Don't leave the cow standing in mud or wet conditions", "Don't force walking", "Don't ignore lameness — it spreads quickly in footrot"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Clean the hoof, apply antiseptic spray, and move to clean dry ground. Footrot requires systemic antibiotics prescribed by a vet. Regular hoof trimming and clean dry housing prevent recurrence.",
            warning: ""
        },
        "Coughing": {
            condition: "Bovine Respiratory Disease (BRD) / Pneumonia",
            severity: "moderate",
            summary: "Bovine Respiratory Disease is the most common and costly disease in beef cattle. It is caused by a combination of viral and bacterial pathogens, worsened by stress, overcrowding, and weather changes.",
            firstAid: ["Move the animal to a well-ventilated but draught-free area", "Provide fresh water and good quality forage", "Monitor temperature and breathing rate"],
            dos: ["Check temperature — fever above 39.5°C indicates infection", "Isolate from herd", "Consult vet for antibiotic treatment promptly"],
            donts: ["Don't wait more than 24 hours to treat if fever is present", "Don't overcrowd animals", "Don't ignore repeated coughing in multiple animals — indicates outbreak"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Isolate, provide good ventilation and nutrition. Early antibiotic treatment by a vet is critical. Delayed treatment leads to chronic pneumonia and permanent lung damage.",
            warning: ""
        },
        "Labored breathing": {
            condition: "Pneumonia / Respiratory Distress",
            severity: "emergency",
            summary: "Labored or rapid breathing in cattle indicates severe respiratory disease such as advanced pneumonia, or in some cases, heart failure or severe bloat affecting the diaphragm.",
            firstAid: ["Move the animal to a cool, shaded, well-ventilated area immediately", "Minimize stress and exertion", "Call a vet urgently"],
            dos: ["Keep the animal calm", "Ensure the animal can stand upright (do not lie flat)", "Note the breathing rate (normal: 10–30 breaths per minute)"],
            donts: ["Don't stress or chase the animal", "Don't delay calling a vet", "Don't let the animal become overheated"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "Provide shade and ventilation immediately. Minimize stress. This is an emergency requiring veterinary treatment with anti-inflammatories, bronchodilators, or antibiotics depending on diagnosis.",
            warning: "🚨 Breathing rate above 60 per minute or open-mouth breathing in cattle is a critical emergency requiring immediate veterinary attention."
        },
    },

    // ══════════════════════════════════════════════════════
    //  HORSE
    // ══════════════════════════════════════════════════════
    horse: {
        "Colic (abdominal pain)": {
            condition: "Equine Colic",
            severity: "emergency",
            summary: "Colic is abdominal pain in horses and is one of the most common causes of death in horses. It can range from mild gas pain to life-threatening intestinal displacement or twist. All suspected colic should be treated as an emergency.",
            firstAid: ["Remove all food immediately", "Walk the horse slowly and calmly — do not trot", "Call a vet immediately — do not wait to see if it resolves", "Monitor vital signs: heart rate (normal 28–44 bpm), gut sounds, gum color"],
            dos: ["Keep the horse walking gently if it is trying to roll violently", "Monitor temperature, pulse, and respiration", "Remove water until vet advises otherwise"],
            donts: ["Don't let the horse roll violently — can cause intestinal torsion", "Don't give pain medications without vet advice — masks symptoms", "Don't leave the horse unattended"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home treatment for colic beyond gentle walking while waiting for the vet. Time is critical. Do not administer medications without veterinary instruction as this can mask critical symptoms.",
            warning: "🚨 Horses with colic can deteriorate rapidly. Absence of gut sounds, rapid heart rate above 60 bpm, pale or dark red gums, or continuous violent rolling indicates a surgical emergency. Do not delay."
        },
        "Lameness": {
            condition: "Laminitis / Hoof Abscess / Soft Tissue Injury",
            severity: "moderate",
            summary: "Lameness in horses has many causes including laminitis (inflammation of the hoof laminae), abscesses, sprains, and joint disease. Any lameness should be investigated promptly as some causes can permanently damage the horse.",
            firstAid: ["Stable the horse immediately and restrict movement", "Check hooves for heat, abscess, nail, or stone", "Apply cold water or ice to inflamed limbs (laminitis)", "Call a vet and farrier"],
            dos: ["Stable rest immediately", "Apply cold hosing for 20 minutes twice daily if hot, inflamed hoof", "Remove the horse from lush grass immediately (laminitis prevention)"],
            donts: ["Don't work a lame horse", "Don't give anti-inflammatories without vet guidance", "Don't ignore lameness that doesn't improve within 24 hours"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Rest the horse, stable it, and apply cold hosing to hot limbs. Remove from pasture if laminitis is suspected. A vet and farrier need to examine the hoof and provide a remedial trimming plan.",
            warning: ""
        },
        "Fever": {
            condition: "Equine Influenza / Strangles / Infection",
            severity: "moderate",
            summary: "Fever in horses (temperature above 38.5°C / 101.3°F) usually indicates respiratory infection (equine flu or strangles) or other systemic infection. Strangles (Streptococcus equi) is highly contagious.",
            firstAid: ["Isolate the horse from others immediately", "Ensure access to fresh water", "Take and record temperature twice daily"],
            dos: ["Strict isolation to prevent spread", "Provide deep bedding and draught-free stabling", "Contact vet for diagnosis and treatment plan"],
            donts: ["Don't share water buckets or tack with other horses", "Don't exercise a febrile horse", "Don't attend shows or transport until cleared by vet"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Strict isolation, rest, fresh water, and good ventilation. Equine flu and strangles require different treatments — a vet's diagnosis is essential. Strangles is reportable and highly contagious to other horses.",
            warning: ""
        },
        "Loss of appetite": {
            condition: "Dental Disease / Gastric Ulcers / Systemic Illness",
            severity: "moderate",
            summary: "Horses that go off feed may have dental problems (sharp edges causing mouth pain), gastric ulcers, or systemic illness. Gastric ulcers are extremely common in performance horses.",
            firstAid: ["Check the mouth and teeth for obvious problems", "Offer different feed types (soft hay, soaked feed)", "Ensure fresh clean water is available"],
            dos: ["Monitor body weight and condition score", "Offer hay before concentrates", "Check for signs of gastric ulcers (girthiness, poor coat, weight loss)"],
            donts: ["Don't leave a horse without feed for more than a few hours", "Don't give large concentrate meals without forage", "Don't ignore the symptom in performance horses"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Offer good quality forage, soaked feeds, and ensure dental health. If gastric ulcers are suspected (common in stressed horses), a vet can prescribe omeprazole. Dental examination should be done annually.",
            warning: ""
        },
        "Swollen legs": {
            condition: "Lymphangitis / Mud Fever / Cellulitis",
            severity: "moderate",
            summary: "Swollen legs in horses can be caused by lymphangitis, cellulitis (deep skin infection), mud fever, or poor circulation. Hot, painful, rapidly increasing swelling is serious.",
            firstAid: ["Cold hose the limb for 20 minutes to reduce swelling", "Clean the leg gently with warm water", "Check for wounds, crusting, or cracks in the skin (mud fever)"],
            dos: ["Keep the horse moving gently (hand walking) to encourage drainage", "Apply stable bandages if trained to do so", "Consult a vet for antibiotic treatment if hot and painful"],
            donts: ["Don't wrap too tightly", "Don't ignore rapidly increasing hot swelling", "Don't leave the horse standing in wet muddy conditions"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Cold hosing, gentle exercise, and leg cleaning are supportive measures. Cellulitis and lymphangitis require veterinary antibiotic treatment. Mud fever prevention involves keeping legs dry and using barrier creams.",
            warning: ""
        },
        "Excessive sweating": {
            condition: "Anhidrosis / Heat Stress / Pain Response",
            severity: "moderate",
            summary: "Excessive, inappropriate sweating in horses may indicate heat stress, pain (especially colic), or in tropical climates, anhidrosis (inability to sweat). Sweating with other symptoms of distress is a red flag.",
            firstAid: ["Move to a cool, shaded area immediately", "Apply cool (not cold) water to the neck, armpits, and inner thighs", "Provide fresh water and electrolytes"],
            dos: ["Monitor vital signs", "Allow the horse to drink freely", "Call a vet if sweating is associated with other symptoms"],
            donts: ["Don't work the horse in high heat and humidity", "Don't use ice-cold water (can cause shock)", "Don't ignore sweating associated with colic signs"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Cool the horse with cool water application, provide electrolyte water, and move to shade. If sweating is accompanied by colic signs, labored breathing, or the horse seems severely distressed, contact a vet immediately.",
            warning: ""
        },
    },

    // ══════════════════════════════════════════════════════
    //  GOAT
    // ══════════════════════════════════════════════════════
    goat: {
        "Diarrhea": {
            condition: "Enterotoxemia / Coccidiosis / Nutritional Scours",
            severity: "moderate",
            summary: "Diarrhea in goats is commonly caused by enterotoxemia (overeating disease), coccidiosis (especially in kids), or sudden dietary changes. Diarrhea can cause rapid dehydration and death in young kids.",
            firstAid: ["Isolate the affected animal immediately", "Provide oral rehydration solution (ORS) to prevent dehydration", "Remove rich grain from the diet temporarily"],
            dos: ["Give electrolytes every 4 hours to kids", "Monitor hydration status (skin tent test)", "Contact vet for diagnosis — treatment differs by cause"],
            donts: ["Don't withhold water", "Don't continue feeding grain concentrates during acute diarrhea", "Don't ignore bloody diarrhea in kids"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide unlimited clean water and electrolytes. Switch to hay only. Monitor closely. Enterotoxemia vaccination (CD&T) is the best prevention. Coccidiosis requires specific antiparasitic treatment from a vet.",
            warning: ""
        },
        "Bloating": {
            condition: "Ruminal Tympany (Frothy or Free-Gas Bloat)",
            severity: "emergency",
            summary: "Goats are prone to bloat when they overeat lush pasture or rich grain. Gas accumulates in the rumen and cannot escape, causing the left side of the abdomen to swell dramatically. Can be fatal in 1–2 hours.",
            firstAid: ["Remove from pasture immediately", "Walk the goat to stimulate belching", "Position the goat with front legs elevated (uphill position)", "Give 50–100ml vegetable oil or anti-bloat agent by mouth if available"],
            dos: ["Keep the goat walking gently", "Call vet immediately for severe cases", "Use a stomach tube to release gas if trained"],
            donts: ["Don't let the goat continue eating", "Don't leave it unattended", "Don't attempt trocar insertion without training"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "For mild cases, walking, anti-bloat oil, and elevated position may resolve it. Severe bloat (left flank hard and distended, goat in distress) is a veterinary emergency requiring immediate intervention.",
            warning: "🚨 Severe bloat can kill a goat within 1–2 hours. If the flank is hard, the goat is distressed and down, call a vet IMMEDIATELY."
        },
        "Limping": {
            condition: "Footrot / Foot Scald / White Line Disease",
            severity: "moderate",
            summary: "Lameness in goats is most often caused by footrot (bacterial infection between the toes with foul smell) or foot scald. It spreads rapidly in wet conditions and can affect entire herds.",
            firstAid: ["Catch the goat carefully and examine the hoof", "Clean the hoof with water", "Trim away loose hoof material carefully", "Apply zinc sulfate or copper sulfate spray to affected area"],
            dos: ["Run the herd through a footbath (zinc sulfate solution)", "Move goats to dry ground", "Isolate severely lame animals"],
            donts: ["Don't leave goats in wet muddy conditions", "Don't ignore lameness spreading to multiple animals", "Don't trim too aggressively"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Clean and trim the hoof, apply antiseptic, and move to dry ground. Footrot requires systemic antibiotic treatment by a vet. Regular hoof trimming and dry housing are the best prevention.",
            warning: ""
        },
        "Teeth grinding": {
            condition: "Urinary Calculi / Severe Pain / Polioencephalomalacia",
            severity: "emergency",
            summary: "Teeth grinding (bruxism) in goats is a sign of significant pain or neurological disturbance. In male goats, it often indicates urinary calculi (bladder stones) — a life-threatening emergency requiring immediate surgery.",
            firstAid: ["Examine the goat for signs of urinary straining, swollen abdomen, or inability to urinate", "Keep the goat calm and call a vet immediately", "Do not attempt to express the bladder"],
            dos: ["Act quickly — urinary obstruction is fatal within 24–48 hours", "Call a vet immediately", "Note when the goat last urinated"],
            donts: ["Don't delay seeking help", "Don't give pain medications without vet advice", "Don't force the goat to drink large amounts"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home treatment. Teeth grinding indicates severe pain requiring immediate veterinary diagnosis and treatment.",
            warning: "🚨 Teeth grinding combined with straining to urinate in male goats is a surgical emergency. The bladder can rupture and kill the animal within hours. Rush to a vet NOW."
        },
        "Nasal discharge": {
            condition: "Caprine Respiratory Disease / CAE / Pneumonia",
            severity: "moderate",
            summary: "Nasal discharge in goats often indicates respiratory infection (pneumonia), caprine arthritis-encephalitis (CAE), or caseous lymphadenitis. Watery discharge may be viral; yellow-green indicates bacterial infection.",
            firstAid: ["Isolate the affected animal from the rest of the herd", "Provide warm, dry, well-ventilated housing", "Clean nasal discharge regularly"],
            dos: ["Monitor temperature and breathing rate", "Ensure adequate nutrition and water", "Contact vet for antibiotic treatment if yellow-green discharge"],
            donts: ["Don't keep sick animals in crowded, damp conditions", "Don't delay treatment for more than 24 hours if fever is present", "Don't share feeders without disinfecting"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Isolate, provide warm dry housing, and monitor closely. Yellow-green nasal discharge with fever requires antibiotic treatment. Good nutrition and vaccination programmes prevent most respiratory diseases.",
            warning: ""
        },
    },

    // ══════════════════════════════════════════════════════
    //  SHEEP
    // ══════════════════════════════════════════════════════
    sheep: {
        "Limping (foot rot)": {
            condition: "Footrot (Dichelobacter nodosus)",
            severity: "moderate",
            summary: "Footrot is a highly contagious bacterial infection of sheep hooves causing severe lameness, foul odor, and separation of the hoof horn. It spreads rapidly in wet conditions and causes significant welfare and economic losses.",
            firstAid: ["Isolate affected sheep immediately — footrot spreads very quickly", "Trim away loose, underrun hoof horn carefully", "Apply oxytetracycline spray or zinc sulfate to the affected hoof", "Run through a foot bath (10% zinc sulfate solution)"],
            dos: ["Treat all affected sheep simultaneously", "Keep sheep on dry ground", "Vaccinate the flock if footrot is a recurring problem"],
            donts: ["Don't leave affected sheep in wet or muddy conditions", "Don't introduce new animals without quarantine and foot inspection", "Don't delay treatment — footrot becomes entrenched quickly"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Trim affected hooves, apply antiseptic spray, and use a foot bath. Systemic antibiotics (procaine penicillin) prescribed by a vet are required for severe cases. Move to dry ground and manage pasture rotation.",
            warning: ""
        },
        "Bloating": {
            condition: "Ruminal Tympany",
            severity: "emergency",
            summary: "Bloat in sheep occurs when rumen gas cannot escape, causing the left flank to swell noticeably. Most commonly seen on lush spring pastures. Can be fatal within hours.",
            firstAid: ["Remove from pasture immediately", "Stand on a slope with head uphill to help gas escape", "Walk the sheep gently to encourage belching", "Give anti-bloat drench (50ml vegetable oil or poloxalene) if available"],
            dos: ["Call vet for severe cases", "Use stomach tube to release gas if trained", "Keep walking the sheep"],
            donts: ["Don't allow access to lush pastures", "Don't leave the animal unattended", "Don't attempt trocar insertion without training"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "Anti-bloat drench and walking can resolve mild cases. Severe bloat requires veterinary intervention. Prevent by gradually introducing sheep to lush pastures.",
            warning: "🚨 Severe bloat in sheep can be fatal in under 2 hours. Hard, distended left flank with animal in distress = emergency. Call vet NOW."
        },
        "Pale gums": {
            condition: "Barber's Pole Worm (Haemonchus contortus) / Anaemia",
            severity: "emergency",
            summary: "Pale gums and mucous membranes in sheep almost always indicate severe anaemia caused by Haemonchus contortus (barber's pole worm) — a blood-sucking internal parasite. This is the leading killer of sheep worldwide in tropical and subtropical regions.",
            firstAid: ["Assess FAMACHA score — check lower eyelid color (white/pale = emergency)", "Drench with an effective anthelmintic (consult vet for product selection)", "Provide supplementary feeding and reduce stress"],
            dos: ["Drench immediately with the correct anthelmintic class", "Provide iron supplementation if severe", "Reduce worm burden on pasture by rotation"],
            donts: ["Don't delay treatment — sheep can die within 24 hours of severe anaemia", "Don't use ineffective anthelmintic without testing for resistance", "Don't put pressure on anaemic sheep by moving them quickly"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "FAMACHA scoring (checking eyelid color) allows targeted drenching. Consult a vet immediately for anthelmintic selection and dosing. Nutritional support (protein and iron) and reduced stress are critical.",
            warning: "🚨 Barber's pole worm can kill sheep within 24 hours in severe infestations. Pale or white lower eyelid (FAMACHA score 4–5) = treat immediately. Do not delay."
        },
        "Wool loss": {
            condition: "Lice Infestation / Wool Break / Dermatophilosis",
            severity: "mild",
            summary: "Wool loss in sheep can be caused by lice (causing rubbing and fleece damage), wool break from nutritional stress or illness, or dermatophilosis (lumpy wool) — a bacterial skin infection.",
            firstAid: ["Examine the fleece and skin carefully for lice (small brown insects) or scabs", "For lice, apply a registered lousicide pour-on or injection treatment", "Keep sheep dry to prevent dermatophilosis"],
            dos: ["Treat the whole flock simultaneously for lice", "Improve nutrition to prevent wool break", "Quarantine new animals before introducing to the flock"],
            donts: ["Don't dip or spray sheep in unsuitable weather conditions", "Don't introduce untreated animals to the flock", "Don't ignore spreading patches of wool loss"],
            vetRequired: false,
            vetUrgency: "Within a week",
            homecare: "Identify the cause first. Lice are treated with registered pour-on or injection products. Nutritional wool break requires improved feeding. Dermatophilosis requires drying the skin and may need antibiotic treatment.",
            warning: ""
        },
        "Swollen face": {
            condition: "Caseous Lymphadenitis (CLA) / Bottle Jaw / Abscess",
            severity: "moderate",
            summary: "Swollen face or jaw in sheep may indicate bottle jaw (fluid accumulation from protein deficiency or worm burden), caseous lymphadenitis (CLA — chronic abscess disease), or a localized abscess.",
            firstAid: ["If the swelling is under the jaw (bottle jaw), check FAMACHA score for worm burden", "Keep the animal separate from the flock", "Do not lance abscesses from CLA — the pus spreads the disease"],
            dos: ["Treat for worms if bottle jaw and anaemia are present", "Improve nutrition if protein deficiency suspected", "Consult vet before lancing any abscess"],
            donts: ["Don't lance CLA abscesses without vet supervision", "Don't ignore bottle jaw — the animal is severely unwell", "Don't move CLA-positive animals without biosecurity measures"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Bottle jaw requires treating the underlying cause (usually worm burden or protein deficiency). CLA abscesses should only be managed by a vet. Maintain good biosecurity to prevent CLA spread.",
            warning: ""
        },
        "Diarrhea": {
            condition: "Ovine Johne's Disease / Coccidiosis / Nematodirosis",
            severity: "moderate",
            summary: "Diarrhea in sheep (scouring) is caused by various pathogens depending on the age of the animal. Lambs are particularly vulnerable to nematodirosis and coccidiosis. Adult chronic scouring may indicate Johne's disease.",
            firstAid: ["Isolate affected animals immediately", "Provide oral rehydration therapy, especially for lambs", "Ensure clean water access"],
            dos: ["Provide electrolytes to weak lambs", "Contact vet for diagnosis to identify specific cause", "Monitor for associated weight loss and lethargy"],
            donts: ["Don't co-mingle scouring lambs with healthy ones", "Don't ignore multiple animals scouring (potential outbreak)", "Don't withhold water"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide clean water, electrolytes, and shelter. Reduce stress. A vet diagnosis is necessary to distinguish between the many causes and prescribe the right treatment.",
            warning: ""
        },
    },

    // ══════════════════════════════════════════════════════
    //  RABBIT
    // ══════════════════════════════════════════════════════
    rabbit: {
        "Loss of appetite": {
            condition: "GI Stasis (Gastrointestinal Stasis)",
            severity: "emergency",
            summary: "GI stasis is the most common cause of sudden death in rabbits. When the gut stops moving, gas builds up rapidly causing extreme pain. A rabbit that stops eating must be seen by a vet within a few hours.",
            firstAid: ["Offer unlimited hay — the most important thing for gut motility", "Gently massage the abdomen in circular motions", "Encourage movement — let the rabbit hop around", "Call a vet immediately if the rabbit hasn't eaten in 4 hours"],
            dos: ["Keep the rabbit warm (they go into shock easily)", "Offer water via syringe if not drinking", "Check for gut sounds by placing ear gently against abdomen"],
            donts: ["Don't give human pain medications — toxic to rabbits", "Don't leave a rabbit without eating for more than 4–6 hours", "Don't offer treats or pellets instead of hay"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "Offer unlimited hay, gentle abdominal massage, and encourage movement. A vet will administer gut motility drugs (metoclopramide), pain relief, fluid therapy, and syringe feeding if the rabbit is not eating.",
            warning: "🚨 GI stasis can kill a rabbit within 24–48 hours. A rabbit not eating or producing droppings for more than 4 hours is a MEDICAL EMERGENCY. Rush to a rabbit-savvy vet."
        },
        "Head tilt": {
            condition: "Vestibular Disease / E. cuniculi / Ear Infection",
            severity: "emergency",
            summary: "Sudden head tilt (torticollis) in rabbits is most commonly caused by Encephalitozoon cuniculi (a parasitic infection) or inner ear infection. It can cause the rabbit to roll and injure itself.",
            firstAid: ["Contain the rabbit in a padded, enclosed space to prevent injury from rolling", "Keep the environment calm and dark", "Call a vet immediately"],
            dos: ["Prevent the rabbit from injuring itself on cage bars or furniture", "Provide deep soft bedding", "Seek vet care urgently for anti-parasitic and anti-inflammatory treatment"],
            donts: ["Don't leave the rabbit unrestrained if actively rolling", "Don't attempt to correct the tilt manually", "Don't delay — early treatment gives the best outcome"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "Pad the enclosure with towels to prevent injury. Keep the rabbit calm and in a small, safe space. Vet treatment with fenbendazole (E. cuniculi) and anti-inflammatories is essential and time-sensitive.",
            warning: "🚨 Head tilt appearing suddenly, especially with rolling or nystagmus (rapid eye movement), requires emergency veterinary treatment within hours."
        },
        "Abnormal droppings": {
            condition: "Cecal Dysbiosis / GI Stasis / Dietary Imbalance",
            severity: "moderate",
            summary: "Rabbit droppings are a vital health indicator. Soft mushy cecotropes not being eaten, very small or misshapen fecal pellets, or no droppings at all are all serious signs of digestive problems.",
            firstAid: ["Remove all pellets and treats — offer only hay and water", "Encourage movement to stimulate gut", "Monitor the number and appearance of droppings every hour"],
            dos: ["Increase hay intake to 80%+ of the diet", "Ensure the rabbit can reach its cecotropes to eat them", "Contact vet if no droppings for 4+ hours"],
            donts: ["Don't feed a diet high in pellets or vegetables", "Don't ignore changes in droppings for more than 12 hours", "Don't fast the rabbit"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Remove pellets and limit vegetables. Offer unlimited high-quality hay. Encourage movement. If the rabbit stops producing droppings entirely or becomes lethargic, this is progressing to GI stasis and requires urgent vet care.",
            warning: ""
        },
        "Sneezing": {
            condition: "Snuffles (Pasteurella multocida)",
            severity: "mild",
            summary: "Sneezing with white, yellow, or green nasal discharge in rabbits is typically caused by Pasteurella multocida (snuffles). It is very common in rabbits and can become chronic, but is manageable with treatment.",
            firstAid: ["Isolate from other rabbits to prevent spread", "Clean discharge from nose and eyes gently with warm damp cotton", "Keep the rabbit warm and reduce stress"],
            dos: ["Keep the environment clean and well-ventilated", "Reduce stressors — stress worsens Pasteurella outbreaks", "Contact vet for antibiotic treatment (typically enrofloxacin or azithromycin)"],
            donts: ["Don't ignore persistent sneezing with discharge", "Don't use dusty bedding (wood shavings) — use paper-based bedding", "Don't breed from rabbits with snuffles"],
            vetRequired: true,
            vetUrgency: "Within a week",
            homecare: "Keep the rabbit warm, reduce stress, use dust-free bedding, and clean discharge regularly. Antibiotics from a vet can control but not always eliminate Pasteurella. Supportive care is lifelong for chronic cases.",
            warning: ""
        },
        "Lethargy": {
            condition: "GI Stasis / RHDV / Systemic Infection",
            severity: "emergency",
            summary: "A lethargic rabbit that is hunched, unwilling to move, or sitting pressed in a corner is in pain or seriously ill. Rabbits hide illness well — by the time they look sick, they are usually very unwell.",
            firstAid: ["Check if the rabbit has eaten recently and if there are droppings present", "Keep the rabbit warm with a warm water bottle wrapped in a towel", "Contact a vet immediately"],
            dos: ["Check for droppings and gut sounds", "Keep warm and hydrated", "Seek vet care urgently — rabbits deteriorate quickly"],
            donts: ["Don't wait and see for more than a few hours", "Don't give human medications", "Don't restrict access to hay and water"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "Keep the rabbit warm, offer hay and water, and monitor for droppings. Any rabbit that is limp, cold, or completely motionless requires emergency veterinary care. Do not delay.",
            warning: "🚨 Rabbits that appear severely lethargic are often in critical condition. Seek a rabbit-savvy vet immediately."
        },
        "Teeth grinding": {
            condition: "Dental Disease / GI Pain",
            severity: "moderate",
            summary: "Gentle tooth grinding (purring) is normal in content rabbits. Loud, frequent grinding indicates significant pain, most commonly from dental disease (molar spurs) or GI pain (gas, stasis).",
            firstAid: ["Check if the rabbit is eating and producing droppings normally", "Offer hay to encourage natural tooth wear", "Arrange a vet examination to check molar teeth"],
            dos: ["Feed unlimited hay as the primary diet (wears teeth naturally)", "Have molars checked by a vet every 6–12 months", "Monitor eating behavior for dropping food (malocclusion sign)"],
            donts: ["Don't ignore loud grinding — it always indicates pain", "Don't rely on pellets as the main diet", "Don't delay dental treatment"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Unlimited hay is the cornerstone of dental and GI health in rabbits. Loud tooth grinding requires prompt veterinary examination. Dental spurs are filed under anesthesia by a vet.",
            warning: ""
        },
        "Difficulty breathing": {
            condition: "Pasteurellosis / Pleural Effusion / Heat Stroke",
            severity: "emergency",
            summary: "Rabbits are obligate nasal breathers — open-mouth breathing or visible effort when breathing is always an emergency. Causes include lower respiratory infection, fluid around the lungs, or heat stroke.",
            firstAid: ["Move to a cool area immediately if heat stroke is suspected", "Mist with cool (not cold) water if hyperthermic", "Keep the rabbit as calm as possible and rush to vet"],
            dos: ["Keep the rabbit calm and minimize handling", "Cool the environment immediately", "Rush to emergency vet"],
            donts: ["Don't submerge in cold water — causes shock", "Don't delay — rabbits can die within minutes from respiratory failure", "Don't leave in hot environments"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home treatment for breathing difficulty in rabbits. This is a critical emergency. Rush to a vet immediately.",
            warning: "🚨 Open-mouth breathing in a rabbit is IMMEDIATELY life-threatening. Rush to an emergency vet NOW."
        },
    },

    // ══════════════════════════════════════════════════════
    //  BIRD (Pet/Poultry)
    // ══════════════════════════════════════════════════════
    bird: {
        "Fluffed feathers": {
            condition: "Illness / Hypothermia / Infection",
            severity: "moderate",
            summary: "A bird that is persistently fluffed up is trying to conserve heat — a classic sign of illness. Birds hide illness extremely well, so a fluffed, quiet bird that normally is active is usually significantly unwell.",
            firstAid: ["Provide warmth immediately — move to a warm (28–32°C) environment", "Place a heat lamp or heated pad on one side of the cage (so the bird can choose)", "Minimize stress and handling", "Contact an avian vet"],
            dos: ["Keep the environment warm and quiet", "Ensure the bird can access food and water easily", "Monitor closely and note other symptoms"],
            donts: ["Don't handle excessively", "Don't allow the bird to become chilled", "Don't wait more than 24 hours to see a vet"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide a quiet, warm, stress-free environment at 28–32°C. Ensure easy access to food and water. A fluffed, quiet bird requires avian veterinary examination — birds deteriorate rapidly when sick.",
            warning: ""
        },
        "Difficulty breathing": {
            condition: "Respiratory Infection / Air Sac Disease / Aspergillosis",
            severity: "emergency",
            summary: "Breathing difficulties in birds (tail bobbing, open-mouth breathing, clicking sounds) indicate severe respiratory disease such as bacterial air sacculitis, Aspergillus fungal infection, or foreign body obstruction.",
            firstAid: ["Keep the bird warm and absolutely calm", "Minimize handling — stress can cause sudden death", "Rush to an avian vet immediately"],
            dos: ["Keep the environment warm", "Reduce all stressors", "Call ahead to the vet so they can prepare oxygen"],
            donts: ["Don't handle the bird more than necessary", "Don't use aerosol sprays near birds — highly toxic", "Don't delay — birds can die within hours"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "There is no safe home treatment. Minimise stress, keep warm, and get to an avian vet immediately. Birds in respiratory distress can die very quickly.",
            warning: "🚨 Open-mouth breathing or tail bobbing in a bird is a respiratory emergency. Rush to an avian vet immediately."
        },
        "Abnormal droppings": {
            condition: "Intestinal Infection / Psittacosis / Dietary Change",
            severity: "moderate",
            summary: "Bird droppings consist of three parts — feces, urates, and urine. Changes in color, consistency, or volume are significant health indicators. Green-black droppings indicate anorexia; bright red indicates blood; yellow-green urates suggest liver disease.",
            firstAid: ["Collect a fresh dropping sample in a clean container for vet examination", "Offer fresh food and water", "Keep the bird warm and calm"],
            dos: ["Note the color, smell, and frequency of droppings", "Keep a droppings sample for vet examination", "Isolate from other birds"],
            donts: ["Don't feed table scraps or avocado (toxic to birds)", "Don't ignore droppings with blood or unusual color", "Don't delay vet visit for more than 24 hours"],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Monitor and collect a fresh sample. Keep the bird warm and offer fresh food and water. Note any dietary changes that may have altered droppings. See an avian vet for diagnosis.",
            warning: ""
        },
        "Feather loss": {
            condition: "Feather Destructive Behavior / Psittacine Beak and Feather Disease / Parasites",
            severity: "moderate",
            summary: "Feather loss in birds can result from over-preening (stress or boredom), PBFD virus (a serious incurable disease in parrots), feather mites, or nutritional deficiency. PBFD is contagious to other birds.",
            firstAid: ["Examine feathers carefully — are they chewed (behavioral) or falling out at the base (disease)?", "Isolate from other birds until PBFD is ruled out", "Provide enrichment to reduce boredom and stress-related plucking"],
            dos: ["Identify and address environmental stressors", "Consult an avian vet for PBFD testing", "Improve diet with balanced pellets, fruit, and vegetables"],
            donts: ["Don't allow contact with other birds until PBFD is ruled out", "Don't punish feather-plucking behavior", "Don't ignore progressive, spreading feather loss"],
            vetRequired: true,
            vetUrgency: "Within a week",
            homecare: "Provide environmental enrichment, a balanced diet, and social interaction. Stress-related plucking improves with enrichment. PBFD requires avian vet diagnosis and biosecurity. Mites are treated with appropriate parasiticides.",
            warning: ""
        },
        "Loss of appetite": {
            condition: "Crop Stasis / Infection / Systemic Illness",
            severity: "emergency",
            summary: "Birds have very high metabolic rates and can deteriorate rapidly when not eating. A bird that stops eating for more than 24 hours is in danger of hypoglycemia and death.",
            firstAid: ["Warm the bird to 28–32°C immediately", "Offer favourite foods to encourage eating", "Syringe-feed water carefully if the bird is weak and not drinking", "Contact an avian vet urgently"],
            dos: ["Offer a variety of highly palatable foods", "Ensure the bird is warm", "Seek veterinary care within hours if not eating"],
            donts: ["Don't leave a bird without food for more than 12 hours", "Don't force-feed without veterinary instruction", "Don't give human medications"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "Provide warmth and enticing food. Birds deteriorate extremely quickly — any bird not eating for 12+ hours needs same-day veterinary attention. Crop stasis, infections, and most causes require specific medical treatment.",
            warning: "🚨 A bird not eating is a medical emergency. Birds have very little energy reserve. Seek an avian vet within hours."
        },
        "Lethargy": {
            condition: "Systemic Infection / Poisoning / Organ Disease",
            severity: "emergency",
            summary: "A lethargic bird sitting on the bottom of its cage, unable to perch, or with eyes half-closed is critically ill. Birds hide illness until they physically cannot anymore.",
            firstAid: ["Warm the bird to 28–32°C immediately — wrap in a towel near a heat source", "Minimize all stress", "Rush to an avian vet"],
            dos: ["Prioritise warmth above all else", "Seek emergency avian vet care", "Remove toxic household items (non-stick cookware fumes, aerosols, cigarette smoke)"],
            donts: ["Don't expose to non-stick (PTFE) cookware fumes — instantly fatal", "Don't delay seeking vet care", "Don't handle excessively"],
            vetRequired: true,
            vetUrgency: "Immediately",
            homecare: "A lethargic bird is critically ill. Provide warmth, minimize handling, and get to an avian vet immediately. There is very little safe home treatment for a bird in this condition.",
            warning: "🚨 A bird sitting on the cage floor unable to perch is a critical emergency. Rush to an avian vet immediately."
        },
        "Sneezing": {
            condition: "Upper Respiratory Infection / Irritant Exposure",
            severity: "mild",
            summary: "Occasional sneezing in birds is normal. Frequent sneezing, especially with nasal discharge or crusty nares, indicates upper respiratory infection, mycoplasma, or irritant exposure (smoke, sprays, dust).",
            firstAid: ["Remove all potential irritants (sprays, candles, air fresheners, smoke)", "Clean the nares gently with warm water", "Move to a clean, well-ventilated environment"],
            dos: ["Ensure a smoke-free, spray-free environment", "Use only bird-safe cleaning products", "Monitor for discharge or worsening symptoms"],
            donts: ["Don't use aerosol sprays, air fresheners, or non-stick cookware near birds", "Don't ignore nasal discharge — can progress to serious infection", "Don't use essential oil diffusers near birds"],
            vetRequired: false,
            vetUrgency: "If symptoms persist",
            homecare: "Eliminate all environmental irritants. Keep the bird in clean, fresh air. If sneezing is frequent or accompanied by nasal discharge, consult an avian vet. Birds are extremely sensitive to airborne toxins.",
            warning: ""
        },
        "Head shaking": {
            condition: "Ear Mites / Middle Ear Infection / Crop Issue",
            severity: "moderate",
            summary: "Head shaking in birds can indicate ear mites, middle ear infection, or in some birds, food stuck in the crop or beak. Frequent or violent head shaking warrants veterinary investigation.",
            firstAid: ["Examine the ear area and beak for visible abnormalities", "Check if the crop feels normal (soft and empty between meals)", "Prevent the bird from injuring itself"],
            dos: ["Consult an avian vet for diagnosis", "Keep the environment clean", "Check for mites on feathers and skin around the ear"],
            donts: ["Don't attempt to clean inside the ear without vet guidance", "Don't ignore the symptom if accompanied by balance problems", "Don't use mammalian ear mite treatments on birds"],
            vetRequired: true,
            vetUrgency: "Within a week",
            homecare: "Monitor the bird carefully. Note if the head shaking is associated with eating, or happens constantly. An avian vet can examine the ear, crop, and neurological function to determine the cause.",
            warning: ""
        },
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// getTreatment — matches selected symptoms to the best treatment in the DB
// Returns a result object identical in shape to what the Claude API returned
// ─────────────────────────────────────────────────────────────────────────────
export function getTreatment(animalId, selectedSymptoms) {
    const animalDB = TREATMENT_DB[animalId];
    if (!animalDB) return null;

    // Score each symptom entry by how many selected symptoms it covers
    let bestMatch = null;
    let bestScore = 0;

    // Priority: emergency > moderate > mild
    const severityScore = { emergency: 3, moderate: 2, mild: 1 };

    for (const symptom of selectedSymptoms) {
        const entry = animalDB[symptom];
        if (!entry) continue;

        // Compute match score
        const sev = severityScore[entry.severity] || 0;
        const score = sev + 1; // higher severity symptoms get priority

        if (score > bestScore) {
            bestScore = score;
            bestMatch = entry;
        }
    }

    // If we have an emergency among ANY selected symptoms, prefer that
    for (const symptom of selectedSymptoms) {
        const entry = animalDB[symptom];
        if (entry && entry.severity === "emergency") {
            return { ...entry };
        }
    }

    if (!bestMatch) {
        // Generic fallback for unknown/custom symptoms
        return {
            condition: "Unknown / Custom Symptoms",
            severity: "moderate",
            summary: `The symptoms you have described for your ${animalId} are not in our standard database. This could indicate an unusual condition or a combination of issues. We strongly recommend consulting a veterinarian for proper diagnosis.`,
            firstAid: [
                "Keep the animal calm, comfortable, and in a safe environment",
                "Ensure access to clean fresh water",
                "Monitor closely and note any changes in behaviour or condition"
            ],
            dos: [
                "Record all symptoms with timestamps",
                "Keep the animal separated from others if disease spread is a concern",
                "Consult a licensed veterinarian promptly"
            ],
            donts: [
                "Don't administer human medications",
                "Don't ignore worsening symptoms",
                "Don't delay veterinary consultation"
            ],
            vetRequired: true,
            vetUrgency: "Within 24 hours",
            homecare: "Provide a clean, comfortable, and stress-free environment. Ensure the animal is eating, drinking, and resting. These custom symptoms have been recorded for future database updates. Please consult a veterinarian for accurate diagnosis and treatment.",
            warning: ""
        };
    }

    return { ...bestMatch };
}