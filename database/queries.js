const graphqlrequest = require('graphql-request')
const GraphQLClient = graphqlrequest.GraphQLClient

const insertUser = async (phoneNumber, password, name, email, area) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_user(objects: {phoneNumber: "${phoneNumber}", 
        password: "${password}", 
        name: "${name}", 
        email: "${email}", 
        area: "${area}"}) {
            affected_rows
            returning {
                id
            }
        }
    }`

    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getUserByEmail = async (email) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        user(where: {email: {_eq: "${email}"}}) {
            area
            areaid
            email
            name
            id
            phoneNumber
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getUserPassword = async (email) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
        user(where: {email: {_eq: "${email}"}}) {
                password
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const insertProblem = async (areaid, department, image_url, description, title, areaid, userid) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `mutation MyMutation {
        __typename
        insert_problems(objects: {
            areaid: "${areaid}", 
            citizen_id: "${userid}", 
            department: "${department}", 
            description: "${description}", 
            image_url: "${image_url}", 
            status: "Submitted", 
            title: "${title}", 
            }) {
            affected_rows
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};


const getProblem = async () => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })

    const query = `query MyQuery {
        problems {
            areaid
            citizen_id
            department
            description
            digiSignature_Count
            downvote
            image_url
            id
            originTime
            resolveTime
            status
            title
            upvote
        }
    }`
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getProblemByAreaID = async (areaid) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getProblemByUser = async (email) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getProblemByDepartent = async (department) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const upvoteProblem = async (problemid) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const downvoteProblem = async (problemid) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const deleteProblem = async (problemid) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const digiSignProblem = async (problemid) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};


const insertOfficial = async (name, password, email, phone, department, area) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

const getOfficialPassword = async (email) => {
    const client = new GraphQLClient('', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = ``
    
    let result = await client.request(query)
        .then(data => { return data })
        .catch((err) => { return err })
    return result
};

