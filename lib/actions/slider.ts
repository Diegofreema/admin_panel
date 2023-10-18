'use server';

import SliderImg from '../model/slider';
import { connectToDB } from '../mongoose';

export async function createSlider(
  heading: string,
  imgUrl: string,
  description: string
) {
  try {
    connectToDB();

    await SliderImg.create({
      heading,
      description,
      imgUrl,
    });
  } catch (error) {
    console.log(error);

    throw new Error('Failed to Create Slider');
  }
}
export async function fetchSliders() {
  try {
    connectToDB();

    const sliders = await SliderImg.find();
    return sliders;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to get sliders');
  }
}

export async function deleteSlider(id: string) {
  try {
    connectToDB();

    await SliderImg.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);

    throw new Error('Failed to delete Slider');
  }
}
