import { Schema, model, models } from "mongoose";

const InquirySchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    course: { type: String, required: true },
    state: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);

export default Inquiry;
