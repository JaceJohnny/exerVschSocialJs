var HealthCareWorkers = [
    {
    Firstname: "Megan",
    LastI: "D",
    age: 26,
    occupation: "nurse",
    skills: ["charge", "CRRT", "medication administration"],
    Friends: ["Brianne", "Ben", "Grant"]
    },
    {
    Firstname: "Brianne",
    LastI: "W",
    age: 34,
    occupation: "Pharmacist",
    skills: ["Medication reconciliation", "Rx Hx", "drug interactions"],
    Friends: [
        {
            Firstname: "Cornelio",
            LastI: "M",
            age: 37,
            occupation: "Healthcare Assistant",
            skills: ["ADLs", "Equipment malfunction", "positioning"],
            Friends: [
                {
                    Firstname: "Grant",
                    LastI: "H",
                    age: 21,
                    occupation: "Healthcare Assistant",
                    skills: ["ADLs", "Equipment malfunction", "positioning"],
                    Friends: "Megan"
                }
            ]

        }
    ]
     },
    {
    Firstname: "Ben",
        LastI: "P",
        age: 35,
        occupation: "Pharmacist",
        skills: ["Medication reconciliation", "Rx Hx", "drug interactions"],
        Friends: "Brianne"   
    },
    {
    Firstname: "Lauren",
    LastI: "M",
    age: 39,
    occupation: "Physician's Assistant",
//method added
    skills: ["ACP", "Procedure", "diagnostics"],
    SkillList: function(){
        return [3].skills, console.log([3].SkillList)
    },
    Friends:[
        {
            Firstname: "Jeanette",
            LastI: "B",
            age: 35,
            occupation: "Attending Physician",
            skills: ["Neuromuscular Pulmonary", "diagnostics", "endotracheal intubation"],
            Friends: "Grant"
       
        }
      ]
    }, 
]

// adding properties
HealthCareWorkers.Firstname = "Jace"
HealthCareWorkers.LasI="J"
console.log(HealthCareWorkers)

//adding to an array
console.log('prior to adding friends to the array=')
console.log(HealthCareWorkers[0].Friends)

console.log('after adding friends to the array')
HealthCareWorkers[0].Friends.push = ["Jace", "Cornelio"]
console.log(HealthCareWorkers[0].Friends)