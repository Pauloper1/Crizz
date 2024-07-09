import React, { useState } from 'react'

function TeamFrom() {
    const iplTeams = [
        "Chennai Super Kings",
        "Delhi Capitals",
        "Kings XI Punjab",
        "Kolkata Knight Riders",
        "Mumbai Indians",
        "Rajasthan Royals",
        "Royal Challengers Bangalore",
        "Sunrisers Hyderabad",
        "Gujarat Titans",
        "Lucknow Super Giants"
    ];

    const [formData, setFormData] = useState({})
    const [teamA, setTeamA] = useState()
    const [teamB, setTeamB] = useState()
    const handleTeamAChange = (e) => {
        const selectedTeamA = e.target.value
        setTeamA(selectedTeamA)
    }
    const handleTeamBChange = (e) => {
        const selectedTeamB = e.target.value
        setTeamB(selectedTeamB)
    }

    const API_URL = 'http://localhost:8000/api'
    const handleSubmit = (e)=>{
        console.log("Button Pressed")
        e.preventDefault()
        fetch(`${API_URL}/hello/`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                message:"Hello Backend"
            }
        }).then(async(response)=>{
            console.log(await response.json())
            console.log("Submitted")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="team">Team: A</label>
                    <select className="form-control" id="team" name="team" onChange={handleTeamAChange}>
                        {iplTeams.map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label for="team">Team: B</label>
                    <select className="form-control" id="team" name="team" onChange={handleTeamBChange}>
                        {iplTeams.map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                        )}
                    </select>
                </div>
                {(teamA && teamB) && (
                    <>
                        <label htmlFor="">Team batting first</label>
                        <div className="form-check">
                            <input  type="radio" name="flexRadioDefault" id="flexRadioDefault1" className="form-check-input" />
                            <label htmlFor="" className='form-check-label'>
                                {teamA}
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" className="form-check-input" />
                            <label htmlFor="" className='form-check-label'>
                                {teamB}
                            </label>
                        </div>

                        {/* Second Innings */}
                        <div className='container d-flex justify-content-center'>
                            <div className="bg-dark" ></div>
                            <h4 className=''>Second Innings</h4>
                            <hr className='' />
                        </div>
                        <div className="form-group">
                            {/* <label for="runsScored">Runs Scored</label> */}
                            <input className="form-control" type="number" name="runsScored" id="runsScored" placeholder="Runs scored" />
                        </div>
                        <div className="form-group">
                            {/* <label for="wicketsFallen">Wickets Fallen</label> */}
                            <input className="form-control" type="number" name="wicketsFallen" id="wicketsFallen" placeholder="Wickets fallen" />
                        </div>
                        <div className="form-group">
                            {/* <label for="oversCompleted">Overs Completed</label> */}
                            <input className="form-control" type="number" name="oversCompleted" id="oversCompleted" placeholder="Overs completed" />
                        </div>
                        <div className="form-group">
                            {/* <label for="requiredRuns">Required Runs</label> */}
                            <input className="form-control" type="number" name="requiredRuns" id="requiredRuns" placeholder="Required runs" />
                        </div>

                        {/* Runs scored
                        Wickets fallen
                        Overs completed
                        Runs still required to win */}
                        <div className="from-group">
                            <button className="btn btn-primary" >Submit</button>
                        </div>
                    </>
                )}
            </form>
    
            {/* <button className="btn btn-primary" onSubmit={()=>{console.log("Btton presed")}}>Submit 2</button> */}
        </div>
    )
}

export default TeamFrom