export const authSchema = {
  user: {
    jobTitle: {
      type: "string" as const,
    },
    useCase: {
      type: "string" as const,
    },
    howDidYouHear: {
      type: "string" as const,
    },
    onboardingCompleted: {
      type: "boolean" as const,
    },
  },
} as const;

export type AuthSchema = typeof authSchema;
