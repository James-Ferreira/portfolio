import React from 'react'


const topoguard_desc = [
    <div class="project_text">
        <h3>TOPOGUARD++</h3>
        <p>
            The project focus was security vulnerabilities within
            Software-defined Networking caused by the current implementation of
            topology discover (LLDP packet forwarding). I investigated a niche
            attack technique termed a ‘host-relay’ which was found to have
            insufficient industry research and solutions. 
            
            I defined a rigorous classification system for the different
            variations of a ‘host-relay’, implemented a statistics module to
            analyse reported traffic on either side of a link, as well as
            co-designing a mechanism to detect fraudulent links in a networks
            topology through controller-aware data-plane packets.
        </p>

    </div>
]

const germinator_desc = [
    <div class="project_text">
        <h3>GERMINATOR</h3>
        <p>
            In DECO2800, a development team of approximately 40-50 people
            (intermixed between programmers and designers) are tasked to follow an
            agile development of an original game. In this project, I co-led the
            games combat system and maintained a position in the ‘Top 10’
            contributors across the entire project. After finishing the combat
            system, I worked through the entire code base and removed all
            vulnerabilities, bugs as well as reducing total code smells by 75%. At
            the end of the semester our game was selected as DECO2800’s 2018
            submission for an IT Innovation competition.
            </p>

    </div>
]

const dogchain_desc = [
    <div class="project_text">
        <h3>DOG CHAIN</h3>
        <p>
            Implement a distributed ledger in which to record the lineage,
            pedigree and medical history of pets. The ledger records events
            such as birth details, parentage, vaccinations, medical conditions,
            insurance information and vet visits. The goal of this is to
            increase visibility of a pet’s history for buyer transparency as
            well as to provide a consolidated platform for this information to
            be available to sources outside of veterinary practices (such as
            owners reselling, kennels etc).
        </p>

    </div>
]

const project_descriptions = [
    topoguard_desc,
    germinator_desc,
    dogchain_desc, 
]

export default project_descriptions