let id = 1
  let womens = [
    {
      id: id++,
      name: "Lauren Irish",
      gender: "female",
      event: "400m Hurdles",
      bestMark: "61.40",
      imageUrl: "http://image.cdnllnwnl.xosnetwork.com/pics33/400/UQ/UQKRYQVUEUHZFYS.20140205230630.jpg"
    },
    {
      id: id++,
      name: "Claudia Cox",
      gender: "female",
      event: "400m Hurdles",
      bestMark: "59.01",
      imageUrl: "http://image.cdnllnwnl.xosnetwork.com/pics33/400/QS/QSYBXMLLIDUIPUS.20190218222327.jpg"
    }
  ]
let mens = [
    {
        id: id++,
        name: "Nick Rack",
        gender: "male",
        event: "110m Hurdles",
        bestMark: "14.01",
        imageUrl: "http://image.cdnllnwnl.xosnetwork.com/pics33/400/MU/MUPRWPAJKWMJFPI.20180202231414.jpg"

    },
    {
        id: id++,
        name: "Josef Polk",
        gender: "male",
        event: "Long Jump",
        bestMark: "22\'11\"",
        imageUrl: "http://image.cdnllnwnl.xosnetwork.com/pics33/400/CT/CTRVDNHRLHIMFQQ.20180202231414.jpg"
    }
]

let athletes = [...womens, ...mens]

module.exports = {
  get: (req, res) => {
    res.send(athletes)
  },

  getSort: (req, res) => {
    let { gender } = req.params 
    if(gender === "female") {
        res.send(womens)
    } else if(gender === "male") {
        res.send(mens)
    }

  },

  createMale: (req, res) => {
    let { name, gender, event, bestMark, imageUrl } = req.body
    if(gender === "male") {
        let male = { 
          id: id++, 
          name, 
          gender, 
          event,
          bestMark,
          imageUrl 
        }
        mens.push(male)
        athletes = [...womens, ...mens]
    }

    res.send(mens)
  }, 

  createFemale: (req, res) => {
    let { name, gender, event, bestMark, imageUrl } = req.body
    if(gender === "female") {
        let female = { 
          id: id++, 
          name, 
          gender, 
          event,
          bestMark,
          imageUrl
           
        }
        womens.push(female)
        athletes = [...womens, ...mens]
        
    }
    res.send(womens)
  },

  updateFemale: (req, res) => {
    console.log(req.body)
    let { name, gender, event, bestMark, imageUrl } = req.body
    let updatedFemale = {
        id: req.params.id, 
        name, 
        gender, 
        event,
        bestMark,
        imageUrl 
    }

    let index = womens.findIndex(woman => Number(woman.id) === Number(req.params.id))

    womens.splice(index, 1, updatedFemale)
    athletes = [...womens, ...mens]    
    res.send(womens)
  },                                                                             

  updateMale: (req, res) => {
    let { name, gender, event, bestMark, imageUrl } = req.body

    let updatedMale = {
        id: req.params.id, 
        name, 
        gender, 
        event,
        bestMark,
        imageUrl 
    }

    let index = mens.findIndex(man => Number(man.id) === Number(req.params.id))

    mens.splice(index, 1, updatedMale)
    athletes = [...womens, ...mens]
    res.send(mens)
  },

  deleteFemale: (req, res) => {
    let {id} = req.params
    let index = womens.findIndex(woman => Number(woman.id) === Number(req.params.id))
    womens.splice(index, 1)
    athletes = [...womens, ...mens]    
    res.send(womens)
  }, 

  deleteMale: (req, res) => {
    let {id} = req.params
    let index = mens.findIndex(man => Number(man.id) === Number(req.params.id))
    mens.splice(index, 1)
    athletes = [...womens, ...mens]    
    res.send(mens)
  }

}