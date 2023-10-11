'use server';

import { connectToDB } from '../mongoose';
import Team from '../model/team';
import Gallery from '../model/gallery';
import Video from '../model/video';
import Project from '../model/project';

export async function createMember(name: string, job: string, imgUrl: string) {
  try {
    connectToDB();

    await Team.create({
      name: name.toLowerCase(),
      job,
      imgUrl,
    });
  } catch (error) {
    console.log(error);

    throw new Error('Failed to Create Member');
  }
}
export async function createVideo(videoUrl: string) {
  try {
    connectToDB();

    await Video.create({
      videoUrl,
    });
  } catch (error) {
    console.log(error);

    throw new Error('Failed to Create Member');
  }
}
export async function createImage(imgUrl: string) {
  try {
    connectToDB();

    await Gallery.create({
      imgUrl,
    });
  } catch (error) {
    console.log(error);

    throw new Error('Failed to Create Member');
  }
}
export async function createProject(name: string, imgUrl: string) {
  try {
    connectToDB();

    await Project.create({
      name,
      imgUrl,
    });
  } catch (error) {
    console.log(error);

    throw new Error('Failed to Create Member');
  }
}
export async function fetchTeam() {
  try {
    connectToDB();

    const team = await Team.find();
    return team;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to get Members');
  }
}
export async function fetchGallery() {
  try {
    connectToDB();

    const images = await Gallery.find();
    return images;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to get Images');
  }
}
export async function fetchVideos() {
  try {
    connectToDB();

    const videos = await Video.find();
    return videos;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to get Videos');
  }
}
export async function fetchProject() {
  try {
    connectToDB();

    const projects = await Project.find();
    return projects;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to get Projects');
  }
}
