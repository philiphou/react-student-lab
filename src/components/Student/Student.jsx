import './Student.css'

function Student(props) {
    return (
        <div className="Student">
            <h3>Name: {props.name}</h3>
            <p> Bio: {props.bio}/</p>
            <h4>Student Results:</h4>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody>
                    {props.scores.map(score =>
                        <tr>
                            <td>{score.date}</td>
                            <td>{score.score}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            
            </div>
            
        )
    }


export default Student
