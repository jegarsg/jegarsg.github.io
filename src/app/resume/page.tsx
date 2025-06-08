import Link from 'next/link'

export default function ResumePage() {
  const experience = [
    {
      company: 'PT Bank Mandiri Tbk',
      title: 'Senior Software Engineer',
      period: '2025 – Now',
      items: [
        'Leading backend squad of 3 developers',
        'Led migration from Azure to on-prem infrastructure',
      ],
    },
    {
      company: 'PT Avows Global Technology',
      title: 'Software Engineer Lead',
      period: '2023 – 2024',
      items: [
        'Led backend squad for PT Bank Mandiri project',
        'Designed and implemented enterprise app with .NET Core 8 & CQRS',
      ],
    },
    {
      company: 'PT Platinumetrix Global Inovasi',
      title: 'Software Engineer',
      period: '2022 – 2023',
      items: [
        'Developed systems for Lembaga Penjamin Simpanan using .NET Core',
        'Built restaurant control system with Python + PostgreSQL',
        'Worked with Golang for ICounting PGI Data',
      ],
    },
    {
      company: 'PT Astra Graphia IT',
      title: '.NET Developer',
      period: '2019 – 2021',
      items: [
        'Worked on internal projects for Astra Otoparts',
        'Used ASP.NET, VB.NET, SSIS, SSRS for reporting & integration',
      ],
    },
  ]

  return (
    <section className="max-w-4xl mx-auto py-16 px-4" id="resume">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Resume</h2>
        <Link
          href="/Jegar_Sahaduta_Ginting_CV.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Download CV
        </Link>
      </div>

      {experience.map((job, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-xl font-semibold text-blue-700">{job.company}</h3>
          <p className="text-gray-800">
            {job.title} <span className="text-sm text-gray-500">({job.period})</span>
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            {job.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
