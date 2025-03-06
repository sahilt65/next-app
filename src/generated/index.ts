import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4000/", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddChildCareRequestInput = {
  canContactParent: Scalars['String']['input'];
  childDateOfBirth: Scalars['String']['input'];
  childEmailAddress: Scalars['String']['input'];
  childGrade: Scalars['String']['input'];
  childName: Scalars['String']['input'];
  childPreferredName: Scalars['String']['input'];
  childSchoolSiteAssociated: Scalars['String']['input'];
  parentGaurdianEmailAddress: Scalars['String']['input'];
  parentGaurdianFirstName: Scalars['String']['input'];
  parentGaurdianLanguage: Scalars['String']['input'];
  parentGaurdianLastName: Scalars['String']['input'];
  parentGaurdianPhoneNumber: Scalars['String']['input'];
  parentGaurdianRelationshipToChild: Scalars['String']['input'];
  preferredLanguageForTherapy: Scalars['String']['input'];
  whyDayBreak: Scalars['String']['input'];
};

export type AddGameInput = {
  platform: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type ChildCareRequestForm = {
  __typename?: 'ChildCareRequestForm';
  canContactParent: Scalars['String']['output'];
  childDateOfBirth: Scalars['String']['output'];
  childEmailAddress: Scalars['String']['output'];
  childGrade: Scalars['String']['output'];
  childName: Scalars['String']['output'];
  childPreferredName: Scalars['String']['output'];
  childSchoolSiteAssociated: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  parentGaurdianEmailAddress: Scalars['String']['output'];
  parentGaurdianFirstName: Scalars['String']['output'];
  parentGaurdianLanguage: Scalars['String']['output'];
  parentGaurdianLastName: Scalars['String']['output'];
  parentGaurdianPhoneNumber: Scalars['String']['output'];
  parentGaurdianRelationshipToChild: Scalars['String']['output'];
  preferredLanguageForTherapy: Scalars['String']['output'];
  whyDayBreak: Scalars['String']['output'];
};

export type Game = {
  __typename?: 'Game';
  id?: Maybe<Scalars['ID']['output']>;
  platform?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addChildCareRequest?: Maybe<ChildCareRequestForm>;
  addGame?: Maybe<Game>;
  deleteGame?: Maybe<Game>;
  updateReview?: Maybe<Review>;
};


export type MutationAddChildCareRequestArgs = {
  form: AddChildCareRequestInput;
};


export type MutationAddGameArgs = {
  game?: InputMaybe<AddGameInput>;
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID']['input'];
  updatedReview?: InputMaybe<UpdateReviewInput>;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  childCareRequestForm?: Maybe<ChildCareRequestForm>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChildCareRequestFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type UpdateReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
};

export type GetChildCareRequestQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetChildCareRequestQuery = { __typename?: 'Query', childCareRequestForm?: { __typename?: 'ChildCareRequestForm', id: string, childName: string, childEmailAddress: string, childDateOfBirth: string, childSchoolSiteAssociated: string, childGrade: string, childPreferredName: string, preferredLanguageForTherapy: string, parentGaurdianRelationshipToChild: string, parentGaurdianFirstName: string, parentGaurdianLastName: string, parentGaurdianEmailAddress: string, parentGaurdianPhoneNumber: string, parentGaurdianLanguage: string, canContactParent: string, whyDayBreak: string } | null };

export type AddChildCareRequestMutationVariables = Exact<{
  form: AddChildCareRequestInput;
}>;


export type AddChildCareRequestMutation = { __typename?: 'Mutation', addChildCareRequest?: { __typename?: 'ChildCareRequestForm', id: string, childName: string, childEmailAddress: string, childDateOfBirth: string, childSchoolSiteAssociated: string, childGrade: string, childPreferredName: string, preferredLanguageForTherapy: string, parentGaurdianRelationshipToChild: string, parentGaurdianFirstName: string, parentGaurdianLastName: string, parentGaurdianEmailAddress: string, parentGaurdianPhoneNumber: string, parentGaurdianLanguage: string, canContactParent: string, whyDayBreak: string } | null };



export const GetChildCareRequestDocument = `
    query GetChildCareRequest($id: ID!) {
  childCareRequestForm(id: $id) {
    id
    childName
    childEmailAddress
    childDateOfBirth
    childSchoolSiteAssociated
    childGrade
    childPreferredName
    preferredLanguageForTherapy
    parentGaurdianRelationshipToChild
    parentGaurdianFirstName
    parentGaurdianLastName
    parentGaurdianEmailAddress
    parentGaurdianPhoneNumber
    parentGaurdianLanguage
    canContactParent
    whyDayBreak
  }
}
    `;

export const useGetChildCareRequestQuery = <
      TData = GetChildCareRequestQuery,
      TError = unknown
    >(
      variables: GetChildCareRequestQueryVariables,
      options?: UseQueryOptions<GetChildCareRequestQuery, TError, TData>
    ) => {
    
    return useQuery<GetChildCareRequestQuery, TError, TData>(
      ['GetChildCareRequest', variables],
      fetcher<GetChildCareRequestQuery, GetChildCareRequestQueryVariables>(GetChildCareRequestDocument, variables),
      options
    )};

export const AddChildCareRequestDocument = `
    mutation AddChildCareRequest($form: AddChildCareRequestInput!) {
  addChildCareRequest(form: $form) {
    id
    childName
    childEmailAddress
    childDateOfBirth
    childSchoolSiteAssociated
    childGrade
    childPreferredName
    preferredLanguageForTherapy
    parentGaurdianRelationshipToChild
    parentGaurdianFirstName
    parentGaurdianLastName
    parentGaurdianEmailAddress
    parentGaurdianPhoneNumber
    parentGaurdianLanguage
    canContactParent
    whyDayBreak
  }
}
    `;

export const useAddChildCareRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddChildCareRequestMutation, TError, AddChildCareRequestMutationVariables, TContext>) => {
    
    return useMutation<AddChildCareRequestMutation, TError, AddChildCareRequestMutationVariables, TContext>(
      ['AddChildCareRequest'],
      (variables?: AddChildCareRequestMutationVariables) => fetcher<AddChildCareRequestMutation, AddChildCareRequestMutationVariables>(AddChildCareRequestDocument, variables)(),
      options
    )};
