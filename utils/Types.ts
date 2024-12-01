// Import the Zod library for schema validation
import * as z from 'zod';

// Define a TypeScript type to represent a Job object
export type JobType = {
  id: string;           // Unique identifier for the job
  createdAt: Date;      // Date the job was created
  updatedAt: Date;      // Date the job was last updated
  clerkId: string;      // Identifier for the associated clerk (user)
  position: string;     // Job title or position name
  company: string;      // Name of the company offering the job
  location: string;     // Location of the job
  status: string;       // Status of the job application (e.g., pending, interview, etc.)
  mode: string;         // Job type (e.g., full-time, part-time, internship)
};

// Enum to represent possible job statuses in a strongly-typed manner
export enum JobStatus {
  Pending = 'pending',       // Application is pending
  Interview = 'interview',   // Interview process is ongoing
  Declined = 'declined',     // Application was declined
}

// Enum to represent possible job modes/types
export enum JobMode {
  FullTime = 'full-time',    // Full-time employment
  PartTime = 'part-time',    // Part-time employment
  Internship = 'internship', // Internship opportunity
}

// Define a schema for validating job creation and editing inputs using Zod
export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: 'position must be at least 2 characters.', // Validation error message for the position field
  }),
  company: z.string().min(2, {
    message: 'company must be at least 2 characters.', // Validation error message for the company field
  }),
  location: z.string().min(2, {
    message: 'location must be at least 2 characters.', // Validation error message for the location field
  }),
  status: z.nativeEnum(JobStatus), // Enforce that the status is a valid value from the JobStatus enum
  mode: z.nativeEnum(JobMode),     // Enforce that the mode is a valid value from the JobMode enum
});

// Infer a TypeScript type from the Zod schema for reuse in the codebase
export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;
