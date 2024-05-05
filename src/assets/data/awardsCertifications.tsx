type AwardType = {
  name: string;
  rank: string;
}

type CertificationType = {
  name: string;
}

export const awards: AwardType[] = [
  {
    name: 'YMHS Mbot Robot Racing Competition.',
    rank: 'Gold Medal Award'
  }, {
    name: 'CYUT Practical Project Production Competition.',
    rank: 'Honorable Mention'
  }
]

export const certifications: CertificationType[] = [
  {
    name: '˙ Level C technician for industrial electronics.'
  }, {
    name: '˙ Level B technician for digital electronics.'
  }
]