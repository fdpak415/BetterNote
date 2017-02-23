{
  current_user: {
    id: 1,
    email: "john@google.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  notes: {
    1: {
      id: 1,
      title: "note1",
      body: "lorem ipsum"
      author_id: 1,
      notebook_id: 2
      tags: {
        1: {
          id: 1,
          name: "tag2"
        }
      }
    }
  },
  notebooks: {
    1: {
      id: 2,
      title: "notebook2",
      description: "school notebook",
      author_id: 1
    }
  },
  tagFilters: [1, 6, 3]
}
