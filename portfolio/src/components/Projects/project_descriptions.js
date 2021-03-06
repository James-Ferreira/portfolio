import React from 'react'

import lock from "../../images/projects/pixel-lock.png"

const topoguard_desc = {
    title: "TopoGuard++",
    image: lock,
    date: "2019",
    desc:
    [<ul>
        <li>
            Focued on security vulnerabilities within Software-defined Networking
            caused by the current implementation of topology discover
            (LLDP packet forwarding)
        </li>
        <li>
            I investigated a niche attack technique termed a ‘host-relay’ which
            was found to have insufficient industry research and solutions
        </li>
        <li>
            I defined a rigorous classification system for the different
            variations of a ‘host-relay’, implemented a statistics module to
            analyse reported traffic on either side of a link, as well as
            co-designing a mechanism to detect fraudulent links in a networks 
            topology through controller-aware data-plane packets
        </li>
    </ul>],
    repo: "https://github.com/P0ntiff/topo_plusplus",
    report: "",
    keywords: ["Networking", "Security", "SDN"]
}

const wanderlist_desc = {
    title: "WanderList",
    image: lock,
    date: "2020",
    desc:
        [<ul>
            <li>
                Performed research and subsequent design process for an
                application, ‘WanderList’, intended to support sustainable
                tourist behaviours
            </li>
            <li>
                The formulated solution, WanderList, attempts to promote
                sustainable behaviours within the tourism industry by positive
                reinforcement towards both tourists and local businesses
            </li>
            <li>
                The primary strategy for this is the promotion of sustainable
                local businesses to tourists via a user created to-do list
                (termed ‘WanderList’) that incentivises the userbase with
                discounts to businesses or tourist sites at their current
                travel destination.
            </li>
        </ul>],
    repo: "",
    report: "",
    keywords: ["Design", "Mobile Application"],
}

const dogchain_desc = {
    title: "BarkChain",
    image: lock,
    date: "2020",
    desc:
    [<ul>
        <li>
            Implement a distributed ledger in which to record the lineage,
            pedigree and medical history of pets.
        </li>
        <li>
            The ledger records events
            such as birth details, parentage, vaccinations, medical conditions,
            insurance information and vet visits
        </li>
        <li>
            The goal of this is to
            increase visibility of a pet’s history for buyer transparency as
            well as to provide a consolidated platform for this information to
            be available to sources outside of veterinary practices (such as
            owners reselling, kennels etc).
        </li>
    </ul>],
    repo: "https://github.com/James-Ferreira/COMS4507",
    report: "",
    keywords: ["Ethereum", "Blockchain", "Web Application"]
}

const project_descriptions = [
    dogchain_desc, 
    wanderlist_desc,
    topoguard_desc,
]

export default project_descriptions