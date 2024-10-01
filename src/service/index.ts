import { fetchGenerateResponseRequest } from "../apis/index";

export const generateAnswer = async (prompt: string) => {
  try {
    const result = await fetchGenerateResponseRequest(prompt);
    return {
      success: true,
      data: result,
      message: "Generated successfully",
    };
  } catch (error) {
    return { success: false, message: "Unable to generate answer." };
  }
};
