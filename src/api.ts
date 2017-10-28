import { AxiosStatic, AxiosInstance } from 'axios'

export class Post {
  id: number
  userId: number
  title: string
  body: string
}

export class Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export class API {
  http: AxiosInstance

  constructor(baseURL: string, http: AxiosStatic) {
    this.http = http.create({ baseURL });
  }

  private jsonToPost(data: any): Post {
    return Object.assign(new Post(), data)
  }

  private jsonToComments(data: any): Array<Comment> {
    return data.map((comment: Comment) => Object.assign(new Comment(), comment))
  }

  /**
   * Load post data from remote service
   * @param id post id to load
   */
  loadPost (id: number): Promise<Post> {
    return this.http.get(`/posts/${id}`)
      .then(response => this.jsonToPost(response.data))
  }

  loadCommentsForPost (postId: number): Promise<Array<Comment>> {
    return this.http.get(`/posts/${postId}/comments`)
      .then(response => this.jsonToComments(response.data))
  }
}
