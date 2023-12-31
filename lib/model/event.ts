import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: String, required: true },
});

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);

export default Event;
