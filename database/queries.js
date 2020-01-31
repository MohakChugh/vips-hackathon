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

const getUser = async (email) => {
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

const getUserPassword = async (data) => {
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

const insertProblem = async (description, title, areaid, userid) => {
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


const getProblem = async () => {
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

