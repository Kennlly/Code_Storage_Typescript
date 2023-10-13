interface Assignment {
  studentId: string;
  title: string;
  verified?: boolean;
}

const originalAssignment: Assignment = {
  studentId: "KH",
  title: "student",
  verified: false,
};

// 1. Partial
const updateAssignment = (
  assign: Assignment,
  propToUpdate: Partial<Assignment>,
): Assignment => {
  return { ...assign, ...propToUpdate };
};
const afterUpdate: Assignment = updateAssignment(originalAssignment, {
  title: "teacher",
});
console.log("After update: ", afterUpdate);

// 2. Required: it is required even the properties are pre-defined as optional
const recordAssignment = (assign: Required<Assignment>): Assignment => assign;
const recordedAssignment: Assignment = recordAssignment({
  studentId: "KK",
  title: "student",
  verified: false,
});

// 3. Readonly
const assignVerified: Readonly<Assignment> = {
  ...recordedAssignment,
  verified: true,
};
console.log("readOnly", assignVerified);

// 4. Record
const hexColor: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "F";
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "A",
};

// 5. Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "title">;
const oneResult: AssignResult = { studentId: "oneResult", title: "student" };
console.log("oneResult", oneResult);

type AssignPreview = Omit<Assignment, "title">;
const onePreview: AssignPreview = {
  studentId: "onePreview",
  verified: true,
};
console.log("onePreview", onePreview);

// 6. Exclude and Extract: NOT work with interface
type adjustedGrade = Exclude<LetterGrades, "B">;
type highGrade = Extract<LetterGrades, "A" | "B">;

// 7. NonNullable
type allGrades = "A" | "B" | "C" | "F" | null | undefined;
type validGrades = NonNullable<allGrades>;

// 8. ReturnType
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;

// 9. Parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
console.log("assignArgs: ", assignArgs);
const tsAssign: NewAssign = createNewAssign(...assignArgs);
console.log("tsAssign: ", tsAssign);

// 10. Awaited: help us with the ReturnType of a Promise
const fetchUsers = async (): Promise<any> => {};
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
