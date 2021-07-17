#Example Queries

```sh
# Write your query or mutation here
query {
  getAllUsers {
    name
  },
  findUser (id: "60f2ce63a50979c012aca605") {
     _id,
    name,
    gender,
    language,
    age,
    location
}
}

# mutation CreateUser($input: UserInput) {
#   createUser(input: $input) {
#     _id,
#     name
#   }
# }

Query Variables 

{
    "input": {
        "name": "Lil Wolf2",
        "gender": "FEMALE",
        "language": "Node",
        "age": 25,
        "location": "Kochin"
    }
}


```

