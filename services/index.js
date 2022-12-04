import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Posts {
      postsConnection(orderBy: publishedAt_DESC) {
        edges {
          node {
            category
            content {
              raw
            }
            coverImage {
              url
            }
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { featuredOnHomePage: true }) {
        category
        content {
          raw
        }
        coverImage {
          url
        }
        createdAt
        excerpt
        slug
        title
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getFeaturedPostsByCategory = async (category) => {
  const query = gql`
    query MyQuery($category: Category!) {
      posts(where: { featured: true, AND: { category: $category } }) {
        category
        content {
          raw
        }
        coverImage {
          url
        }
        createdAt
        excerpt
        slug
        title
      }
    }
  `;
  const result = await request(graphqlAPI, query, { category });

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        category
        excerpt
        coverImage {
          url
        }
        createdAt
        slug
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (category, slug) => {
  const query = gql`
    query MyQuery($category: Category!, $slug: String!) {
      posts(
        where: { category: $category, AND: { slug_not: $slug } }
        orderBy: createdAt_DESC
      ) {
        category
        excerpt
        slug
        title
        content {
          raw
        }
        coverImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { category, slug });

  return result.posts;
};

export const getJavascriptPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: JAVASCRIPT, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            id
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getStylingPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: STYLING, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getSolidityPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: SOLIDITY, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getTheGraphPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: THEGRAPH, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getNextJSPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: NEXTJS, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getHardhatPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: HARDHAT, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getGraphqlPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: GRAPHQL, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getSecurityPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(
        where: { category: SECURITY, AND: { featured: false } }
        orderBy: createdAt_DESC
      ) {
        edges {
          node {
            content {
              raw
            }
            coverImage {
              url
            }
            category
            createdAt
            excerpt
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
      query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};
