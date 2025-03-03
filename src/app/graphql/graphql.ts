/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']['output']>;
  suite?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['Int']['output'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type AlbumPhotosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']['output']>;
  catchPhrase?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['String']['output']>;
  updatePost?: Maybe<Post>;
};


export type MutationCreatePostArgs = {
  post: CreatePostInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationUpdatePostArgs = {
  post: UpdatePostInput;
  postId: Scalars['Int']['input'];
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  id: Scalars['Int']['output'];
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};


export type PostCommentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  albums?: Maybe<Array<Maybe<Album>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  userById?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryAlbumsArgs = {
  albumId?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommentsArgs = {
  commentId?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPhotosArgs = {
  albumId?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  photoId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTodosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  todoId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  albums?: Maybe<Array<Maybe<Album>>>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  username?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type UserAlbumsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type UserPostsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTodosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UserQuery = { __typename?: 'Query', userById?: { __typename?: 'User', id: number, name?: string | null, username?: string | null, email?: string | null, phone?: string | null, website?: string | null, address?: { __typename?: 'Address', street?: string | null, suite?: string | null, city?: string | null, zipcode?: string | null, geo?: { __typename?: 'Geo', lat?: string | null, lng?: string | null } | null } | null, company?: { __typename?: 'Company', name?: string | null, catchPhrase?: string | null, bs?: string | null } | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const UserDocument = new TypedDocumentString(`
    query User($id: Int!) {
  userById(id: $id) {
    id
    name
    username
    email
    phone
    website
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lng
      }
    }
    company {
      name
      catchPhrase
      bs
    }
  }
}
    `) as unknown as TypedDocumentString<UserQuery, UserQueryVariables>;