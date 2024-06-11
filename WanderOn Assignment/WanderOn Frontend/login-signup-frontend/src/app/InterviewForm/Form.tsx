"use client"
import React, { useState } from "react";
import Link from "next/link";

const Form = ({ interviewName }: { interviewName: string }) => {
  const technicalSkills = ["Java", "Python", "Excel"]; // Options for technical skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="flex-1 p-8 bg-green-100">
      <h1 className="text-3xl font-semibold mb-8 text-center text-black">{interviewName}</h1>
      <form className="flex flex-col mb-8">
        <label htmlFor="jobPosition" className="text-black mb-2">Job Position</label>
        <input
          type="text"
          id="jobPosition"
          className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
          required
        />

        <label htmlFor="yearsExperience" className="text-black mb-2">Years of Experience Required</label>
        <input
          type="number"
          id="yearsExperience"
          className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
          required
        />

        <label htmlFor="jobDescription" className="text-black mb-2">Job Description</label>
        <textarea
          id="jobDescription"
          className="border border-gray-300 rounded px-3 py-2 mb-4 h-32 focus:outline-none focus:border-blue-400"
          required
        />

        {/* Custom dropdown for technical skills */}
        <div className="relative mb-4">
          <label htmlFor="technicalSkills" className="text-black mb-2">Technical Skills (minimum 2 required)</label>
          <div className="border border-gray-300 rounded px-3 py-2 mb-4 flex items-center justify-between cursor-pointer bg-white" onClick={toggleDropdown}>
            <span className="text-black">{selectedSkills.length > 0 ? selectedSkills.join(", ") : "Select skills..."}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {showDropdown && (
            <div className="absolute bg-white border border-gray-300 rounded mt-1 w-full shadow-md">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                    selectedSkills.includes(skill)
                      ? "bg-gray-200 text-black" // Apply black text color if selected
                      : "text-black" // Apply black text color to options
                  }`}
                  onClick={() => handleSkillSelect(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* AddQuestions button */}
        <Link href="/addQuestions">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Questions
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
