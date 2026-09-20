export interface Treatment {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  treatments: Treatment[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    icon: 'Smile',
    color: 'from-blue-600 to-cyan-700',
    description: 'Comprehensive orthodontic treatments to align teeth, correct bite discrepancies, and craft confident smiles for adolescents and adults.',
    treatments: [
      { name: 'Fixed Metal Braces', description: 'Proven precision stainless steel bracket systems for complex alignment and bite correction.', highlight: true },
      { name: 'Ceramic Braces', description: 'Tooth-colored aesthetic ceramic brackets for a discreet straightening journey.', highlight: true },
      { name: 'Clear Aligners', description: 'Custom transparent removable aligners for discreet, comfortable teeth straightening.', highlight: true },
      { name: 'Removable Appliances', description: 'Active removable plates for mild arch expansion and interceptive tooth movement.' },
      { name: 'Myofunctional Appliances', description: 'Early interceptive guidance devices correcting oral habits and guiding jaw development.' },
      { name: 'Orthopedic Appliances', description: 'Skeletal growth modification appliances addressing jaw size discrepancies.' },
      { name: 'Orthognathic Surgery', description: 'Combined orthodontic and corrective jaw surgery for severe skeletal imbalances.' },
      { name: 'Retainers & Maintenance', description: 'Custom fixed and removable retainers to protect and maintain long-term alignment.' },
    ],
  },
  {
    id: 'conservative',
    name: 'Conservative Dentistry',
    icon: 'Shield',
    color: 'from-teal-600 to-emerald-700',
    description: 'Tooth-preserving therapies focused on saving natural tooth structure through precision endodontics and lifelike restorations.',
    treatments: [
      { name: 'Root Canal Treatment (RCT)', description: 'Painless removal of infected pulp tissue, canal disinfection, and hermetic sealing using rotary endodontics.', highlight: true },
      { name: 'Single-Visit Endodontics', description: 'Advanced rotary canal preparation and sealing completed in one comfortable clinical session.' },
      { name: 'Re-Root Canal Treatment', description: 'Specialized revision therapy for previously treated teeth requiring re-treatment.' },
      { name: 'Aesthetic Composite Fillings', description: 'Multi-shade tooth-colored nano-hybrid composite restorations matching natural enamel optical properties.', highlight: true },
      { name: 'Post & Core Build-Up', description: 'Fiber-reinforced root post placement to rebuild structurally compromised teeth before crown placement.' },
      { name: 'Glass Ionomer (GIC) Restorations', description: 'Biocompatible fluoride-releasing fillings ideal for cervical wear, root caries, and subgingival margins.' },
    ],
  },
  {
    id: 'prosthodontics',
    name: 'Prosthodontics',
    icon: 'Crown',
    color: 'from-indigo-600 to-blue-800',
    description: 'Restorative replacement of missing teeth and broken structures to re-establish full masticatory function, bite harmony, and facial aesthetics.',
    treatments: [
      { name: 'Dental Implants', description: 'State-of-the-art titanium root replacements with custom abutments and lifelike crowns for permanent tooth restoration.', highlight: true },
      { name: 'Zirconia & E-max Crowns', description: 'Ultra-durable, metal-free full ceramic crowns delivering superior strength and lifelike translucency.', highlight: true },
      { name: 'Porcelain Fused to Metal (PFM)', description: 'Time-tested crowns and multi-unit bridges combining metal core strength with aesthetic porcelain facing.' },
      { name: 'Fixed Dental Bridges', description: 'Fixed prostheses replacing one or more missing teeth anchored securely to adjacent healthy teeth.' },
      { name: 'Complete Dentures', description: 'Custom anatomical full-arch prostheses designed for optimal stability, comfort, and natural facial support.' },
      { name: 'Cast Partial Dentures (CPD)', description: 'Precision metal-framework partial dentures providing sturdy, hygienic tooth replacement.' },
    ],
  },
  {
    id: 'surgery',
    name: 'Oral & Maxillofacial Surgery',
    icon: 'Stethoscope',
    color: 'from-sky-700 to-blue-900',
    description: 'Specialist surgical interventions for complex extractions, dental trauma management, cyst treatment, and corrective maxillofacial procedures.',
    treatments: [
      { name: 'Avulsed Tooth Management', description: 'Immediate emergency management, repositioning, splinting, and endodontic care for teeth knocked out or displaced due to trauma.', highlight: true },
      { name: 'Surgical Wisdom Tooth Removal', description: 'Gentle, atraumatic surgical removal of impacted or symptomatic mandibular and maxillary third molars.', highlight: true },
      { name: 'Routine & Complex Extractions', description: 'Pain-free extraction of non-restorable, severely broken down, or crowded teeth under local anesthesia.' },
      { name: 'Cyst Enucleation & Biopsy', description: 'Surgical removal and histological examination of jaw cysts and soft tissue oral lesions.' },
      { name: 'Frenectomy & Alveoloplasty', description: 'Soft tissue frenum releases and pre-prosthetic bone contouring for comfortable denture seating.' },
    ],
  },
  {
    id: 'aesthetic',
    name: 'Aesthetic Dentistry',
    icon: 'Sparkles',
    color: 'from-amber-600 to-yellow-700',
    description: 'Smile design procedures combining clinical precision and cosmetic artistry to enhance the color, shape, and symmetry of your teeth.',
    treatments: [
      { name: 'Professional Teeth Whitening', description: 'In-office clinical bleaching safely lifting deep enamel stains for a visibly brighter, refreshed smile.', highlight: true },
      { name: 'Porcelain & Composite Veneers', description: 'Ultra-thin custom laminates bonded to the front teeth to correct discoloration, chipping, and irregular shapes.', highlight: true },
      { name: 'Ultrasonic Scaling & Polishing', description: 'Deep removal of calculus, plaque, and stubborn tobacco or tea stains followed by high-gloss paste polishing.' },
      { name: 'Diastema Closure', description: 'Artistic composite bonding to seamlessly close gaps between front teeth in a single visit.' },
      { name: 'Cosmetic Tooth Contouring', description: 'Subtle re-shaping of uneven incisal edges and minor enamel imperfections for harmonious smile flow.' },
    ],
  },
  {
    id: 'pediatric',
    name: 'Pediatric Dentistry',
    icon: 'Heart',
    color: 'from-rose-500 to-pink-700',
    description: 'Gentle, child-centered dental care focused on prevention, cavity management, and building positive lifelong oral health attitudes.',
    treatments: [
      { name: 'Pediatric Restorations', description: 'Gentle, tooth-colored composite and GIC fillings customized for primary and young permanent teeth.' },
      { name: 'Pulpotomy & Pulpectomy', description: 'Therapeutic pulp treatment to preserve decayed baby teeth and prevent premature tooth loss.' },
      { name: 'Space Maintainers', description: 'Custom orthodontic appliances preserving dental arch space when baby teeth are lost prematurely.' },
      { name: 'Stainless Steel Crowns', description: 'Durable full-coverage crowns protecting extensively decayed primary molars until natural exfoliation.' },
      { name: 'Topical Fluoride & Sealants', description: 'Preventive pit and fissure sealants and fluoride varnishes strengthening young enamel against decay.' },
    ],
  },
  {
    id: 'geriatric',
    name: 'Geriatric Dentistry',
    icon: 'Users',
    color: 'from-cyan-700 to-teal-800',
    description: 'Compassionate dental care tailored for senior patients, addressing age-related dental changes, root caries, dry mouth, and denture comfort.',
    treatments: [
      { name: 'Root Caries Management', description: 'Minimally invasive restorative care and topical remineralization for exposed root surfaces common in older adults.' },
      { name: 'Denture Relining & Repair', description: 'Adjustment and clinical relining of loose complete or partial dentures to restore chewing comfort.' },
      { name: 'Xerostomia (Dry Mouth) Care', description: 'Comprehensive clinical management of reduced salivary flow and oral mucosal dryness.' },
      { name: 'Atraumatic Restorative Treatment', description: 'Gentle, low-stress restorative techniques preserving natural dentition with maximum patient comfort.' },
      { name: 'Periodontal Maintenance for Seniors', description: 'Tailored hygiene protocols managing gingival recession and supporting long-term tooth retention.' },
    ],
  },
  {
    id: 'oral-medicine',
    name: 'Oral Medicine',
    icon: 'Activity',
    color: 'from-blue-700 to-indigo-900',
    description: 'Expert diagnostic evaluation and non-surgical management of oral mucosal conditions, oral ulcers, precancerous lesions, and jaw pain.',
    treatments: [
      { name: 'Oral Mucosal Lesion Diagnosis', description: 'Clinical assessment, differential diagnosis, and targeted therapeutic management of oral ulcers and white lesions.' },
      { name: 'Oral Lichen Planus & Stomatitis', description: 'Evidence-based clinical management of recurrent aphthous stomatitis, oral lichen planus, and burning sensations.' },
      { name: 'Precancerous Screening & Evaluation', description: 'Meticulous clinical screening and monitoring of leukoplakia, erythroplakia, and submucous fibrosis.' },
      { name: 'TMJ & Myofascial Pain Assessment', description: 'Non-surgical conservative therapy and splint guidance for temporomandibular joint discomfort.' },
      { name: 'Oral Infection Management', description: 'Diagnostic evaluation and therapeutic care for fungal, bacterial, and viral oral infections.' },
    ],
  },
];
