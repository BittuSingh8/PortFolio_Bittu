function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-heading">
        <p>My Academic Background</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">

        {/* B.Tech */}
        <div className="education-card">
          <div className="education-icon">
            B.Tech
          </div>

          <div className="education-content">
            <span className="education-year">
              2022 -- 2026
            </span>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Computer Science & Engineering
            </h4>

            <p className="education-institute">
              Corporate Institute of Science & Technology (CIST), Bhopal
            </p>

            <p className="education-university">
              RGPV, Bhopal
            </p>

            <div className="education-result">
              <strong>Percentage:</strong> 75%
            </div>
          </div>
        </div>

        {/* Class XII */}
        <div className="education-card">
          <div className="education-icon">
            
          </div>

          <div className="education-content">
            <span className="education-year">
              2022
            </span>

            <h3>
              Senior Secondary / Class XII
            </h3>

            <p className="education-institute">
              Central Board of Secondary Education (CBSE)
            </p>

            <div className="education-result">
              <strong>Percentage:</strong> 63%
            </div>
          </div>
        </div>

        {/* Class X */}
        <div className="education-card">
          <div className="education-icon">
            
          </div>

          <div className="education-content">
            <span className="education-year">
              2020
            </span>

            <h3>
              Secondary / Class X
            </h3>

            <p className="education-institute">
              Central Board of Secondary Education (CBSE)
            </p>

            <div className="education-result">
              <strong>Percentage:</strong> 77%
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;