import {Client} from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
  notionVersion: '2022-06-28'
});


export const getPage = async (pageId: string) => {
  return notion.pages.retrieve({
    page_id: pageId,
  });
}

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DATABASE;
  if (databaseId) {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  }
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
