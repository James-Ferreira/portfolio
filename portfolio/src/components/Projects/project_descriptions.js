import React from 'react'

import lock from "../../images/projects/pixel-lock.png"

const topoguard_desc = {
    title: "TopoGuard++",
    image: lock,
    date: "2019",
    desc: 
        "The project focus was security vulnerabilities within \
        Software-defined Networking caused by the current implementation of \
        topology discover (LLDP packet forwarding). I investigated a niche \
        attack technique termed a ‘host-relay’ which was found to have \
        insufficient industry research and solutions.  \
        \
        I defined a rigorous classification system for the different \
        variations of a ‘host-relay’, implemented a statistics module to \
        analyse reported traffic on either side of a link, as well as \
        co-designing a mechanism to detect fraudulent links in a networks \
        topology through controller-aware data-plane packets.",
    repo: "https://github.com/P0ntiff/topo_plusplus",
    report: "",
    keywords: ["Networking", "Security", "SDN"]
}

const germinator_desc = {
    title: "Germinator",
    image: lock,
    date: "2018",
    desc:
        "In DECO2800, a development team of approximately 40-50 people\
        (intermixed between programmers and designers) are tasked to follow\
        an agile development of an original game. \
        the end of the semester our game was selected as DECO2800’s 2018 \
        submission for an IT Innovation competition",
    repo: "",
    report: "",
    keywords: ["Agile", "Game"],
}

const dogchain_desc = {
    title: "BarkChain",
    image: lock,
    date: "2020",
    desc:
        "Implement a distributed ledger in which to record the lineage,\
        pedigree and medical history of pets. The ledger records events\
        such as birth details, parentage, vaccinations, medical conditions,\
        insurance information and vet visits. The goal of this is to\
        increase visibility of a pet’s history for buyer transparency as\
        well as to provide a consolidated platform for this information to\
        be available to sources outside of veterinary practices (such as\
        owners reselling, kennels etc).",
    repo: "https://github.com/James-Ferreira/COMS4507",
    report: "",
    keywords: ["Ethereum", "Blockchain", "Web Application"]
}

const project_descriptions = [
    topoguard_desc,
    germinator_desc,
    dogchain_desc, 
]

export default project_descriptions