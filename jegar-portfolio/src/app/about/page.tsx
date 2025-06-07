export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4" id="about">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        I’m a <strong>Senior Software Engineer</strong> and <strong>Backend Squad Lead</strong> with
        solid experience designing, building, and maintaining scalable enterprise systems. My
        specialties include <span className="text-blue-600 font-medium">.NET Core</span>,{' '}
        <span className="text-blue-600 font-medium">Golang</span>, and{' '}
        <span className="text-blue-600 font-medium">Python</span>, often delivered using clean
        architecture, CQRS, and SOLID principles.
      </p>

      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        I’ve led development teams, migrated infrastructure from cloud to on-prem, and shipped
        real-world applications in fintech, government, and enterprise domains.
      </p>

      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        I’m passionate about solving problems with clean code and building systems that last.
      </p>
    </section>
  )
}
