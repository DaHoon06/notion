import {Client} from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
  notionVersion: '2022-06-28'
});
const databaseId = process.env.NOTION_DATABASE;

export const getPage = async (pageId: string) => {
  console.log(pageId, '?')
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  console.log(response)
}

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
