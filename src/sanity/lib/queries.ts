import { defineQuery } from "next-sanity";
import { client } from "./client";

export const cardsQueries = defineQuery(
  `*[_type == "homeContent"][0].cards[0...3] | order(cardDate desc){
  title,
  description,
  link,
  cardDate
}`
);

export async function getCards() {
  return await client.fetch(cardsQueries);
}

export const homeContentQueries = defineQuery(`*[_type=="homeContent"][0]{
  _id,
  heroText,
  heroDescription,
  redirectButton,
  postTitle,
  postsDescription,
  } `);

export async function getHomeConten() {
  return await client.fetch(homeContentQueries);
}
