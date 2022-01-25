import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"

function GitHubCard() {
    const [gitHubName, setGitHubName] = useState('')
    const [gitHubBio, setGitHubBio] = useState('')
    const [gitHubImg, setGitHubImg] = useState('')


    useEffect(() => {
        fetch('https://api.github.com/users/chandlerblaschka')
            .then(res => res.json())
            .then(data => {
                setGitHubName(data.name)
                setGitHubBio(data.bio)
                setGitHubImg(data.avatar_url)
            })
    }, [])

    return (
        <div className="gitCard">
            <Card style={{ width: "20%", margin: "25px auto" }}>
                <Card.Img variant="top" src={gitHubImg} />
                <Card.Body>
                    <Card.Title>{gitHubName}</Card.Title>
                    <Card.Text>{gitHubBio}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard