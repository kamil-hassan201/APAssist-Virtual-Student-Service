import { useState } from 'react';
import ChipsContainer from './ChipsContainer';
import InputWithLabel from './InputWithLabel';
import { chips_data } from '../static/chips';

const RecommendationStudentForm = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [interests, setInterests] = useState('');
  const [careers, setCareers] = useState('');
  const [hobbies, setHobbies] = useState('');

  const handleInterestChipClick = (chip) => {
    setInterests(interests ? `${interests}, ${chip}` : chip);
  };

  const handleCareerChipClick = (chip) => {
    setCareers(careers ? `${careers}, ${chip}` : chip);
  };

  const handleHobbiesChipClick = (chip) => {
    setHobbies(hobbies ? `${hobbies}, ${chip}` : chip);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    console.log({ selectedCourse, interests });
  };

  return (
    <div className="p-4">
      <form className="space-y-4">
        {/* Course Type Select */}
        <div>
          <label
            htmlFor="courseType"
            className="block text-sm font-medium text-gray-700"
          >
            Course Type
          </label>
          <select
            id="courseType"
            name="courseType"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Bachalors">Bachalors (Undergraduate)</option>
            <option value="Masters">Masters</option>
          </select>
        </div>
        {/* Interests and Skills Input */}
        <div>
          <InputWithLabel
            id="interests"
            label="Interests and Skills"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
          <ChipsContainer
            chips={chips_data.interests}
            onChipClick={handleInterestChipClick}
          />
        </div>
        <div>
          <InputWithLabel
            id="career"
            label="Career Aspirations"
            value={careers}
            onChange={(e) => setCareers(e.target.value)}
          />
          <ChipsContainer
            chips={chips_data.career_aspirations}
            onChipClick={handleCareerChipClick}
          />
        </div>
        <div>
          <InputWithLabel
            id="hobbies"
            label="Hobbies and Freetime Activites"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <ChipsContainer
            chips={chips_data.hobbies}
            onChipClick={handleHobbiesChipClick}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={!interests && !hobbies && !careers}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white   focus:outline-none focus:ring-2 focus:ring-offset-2  ${
              !interests && !hobbies && !careers
                ? 'bg-gray-400 hover:bg-gray-400 focus:ring-gray-400 '
                : 'bg-gray-700 hover:bg-gray-900 focus:ring-gray-900'
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendationStudentForm;
