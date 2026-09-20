export interface Doctor {
  id: number;
  name: string;
  qualifications: string[];
  designation: string;
  hospital: string;
  specialization: string;
  bmdc: string;
  bio: string;
  photoPlaceholder: boolean;
  photoUrl?: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Mostofa Mujahid Al Hussain',
    qualifications: [
      'BDS (DU)',
      'D-Orthodontics',
      'PGT (Shaheed Suhrawardy Medical College Hospital)',
      'Advanced Training in Dental Implant'
    ],
    designation: 'Consultant',
    hospital: 'Jahurul Islam Medical College & Hospital',
    specialization: 'Orthodontist & Oro-Dental Surgeon',
    bmdc: '6443',
    bio: 'Senior consultant specializing in comprehensive orthodontics, dentofacial orthopedics, and advanced dental implant surgery with post-graduate training from Shaheed Suhrawardy Medical College Hospital.',
    photoPlaceholder: false,
    photoUrl: '/images/doctor.jpeg',
  },
  {
    id: 2,
    name: 'Dr. Mohsina Muslim Rumana',
    qualifications: [
      'BDS (DU)',
      'D-OMFS (CMH Dhaka)',
      'MPH',
      'PGT (BIRDEM)',
      'Advanced Training in Dental Implant'
    ],
    designation: 'Oral & Maxillofacial Surgeon',
    hospital: "Dr. Mujahid's Oro-Dental Clinic",
    specialization: 'Oral & Maxillofacial Surgeon',
    bmdc: '6442',
    bio: 'Specialist in oral and maxillofacial surgery with post-graduate qualification from CMH Dhaka, specialized training at BIRDEM, and advanced implantology expertise.',
    photoPlaceholder: true,
  },
  {
    id: 3,
    name: 'Doctor Name — To Be Added',
    qualifications: ['Qualifications — To Be Added'],
    designation: 'Associate Dental Surgeon',
    hospital: "Dr. Mujahid's Oro-Dental Clinic",
    specialization: 'General & Preventive Dentistry',
    bmdc: 'To Be Added',
    bio: 'Profile and qualification details will be updated upon appointment confirmation.',
    photoPlaceholder: true,
  },
];
