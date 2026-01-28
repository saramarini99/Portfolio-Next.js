import { skills } from "../../../data/about/about";

export default function SkillsGrid() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              flex items-center justify-center
              rounded-xl border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-800
              shadow-sm
              transition-transform transition-colors duration-300
              text-sm font-medium
              px-5 py-4
              cursor-pointer
              hover:bg-indigo-50 dark:hover:bg-indigo-900
              hover:scale-105
              hover:shadow-lg
            "
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
