import './main.scss';

function App() {
  return (
    <div>
      <div className='base-header'>
        <header className='page-title'>
          <h1>Review Site</h1>
        </header>

        <nav className='navbar'>
          <a href="http://www.umd.edu">UMD Web Site</a>
        </nav>
      </div>

      <main>
        <article className="programming_languages_reviews">
          <header>
            <h2>Java</h2>
          </header>

          <section className="faculty_reviews">
            <h2>Faculty Reviews</h2>

            <article className="faculty_review">
              <h2>Dr. JavaJava</h2>
              <p>Great Language</p>
              <footer className='faculty_review-footer'>
                <p>Submitted on <time datetime="2016-01-04 17:00">Jan 4</time>
                </p>
              </footer>
            </article>

            <article className="faculty_review">
              <h2>Dr. AssemblyAssembly</h2>
              <p>I prefer Assembly</p>
              <footer className='faculty_review-footer'>
                <p>Submitted on <time datetime="2016-01-02 14:00">Jan 2</time>
                </p>
              </footer>
            </article>

            <article className="faculty_review">
              <h2>Dr. JavaScript</h2>
              <p>I prefer JavaScript</p>
              <footer className='faculty_review-footer'>
                <p>Lorem ipsum voluptatem quisquam alias quam itaque enim sit
                  laudantium doloremque fuga laborum officiis accusamus
                  deserunt
                  sint porro? repellat sed quas ipsa vitae, tenetur sit error expedita
                  dicta. In incidunt quaerat odio delectus, magni iste
                  fugit,
                  quis rerum quae similique consequatur consectetur nemo.
                  Laboriosam?</p>
              </footer>
            </article>
          </section>

          <footer>
            <p>UMCP   Java Reviews</p>
          </footer>
        </article>
      </main>

    </div>
  );
}

export default App;
