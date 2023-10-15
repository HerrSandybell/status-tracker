enum Gender {
  male = "Male",
  female = "Female",
  other = "Other",
}

enum EyeColor {
  amber = "Amber",
  hazel = "Hazel",
  brown = "Brown",
  blue = "Blue",
  green = "Green",
  gray = "Gray",
  red = "Red"
}

enum HairColor {
  brown = "Brown",
  white = "White",
  black = "Black",
  blonde = "Blonde",
  red = "Red",
  ginger = "Ginger",
  blue = "Blue",
  green = "Green",
  pink = "Pink",
  purple = "Purple"
}

export enum Status {
  MISSING = 'נעדר',
  DEAD = 'הרוג',
  ALIVE = 'נמצא',
  MISSING_BODY = 'הרוג נעדר',
  KIDNAPPED = 'חטוף',
  UNKNOWN = 'NA'
}

interface Person {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
}

export interface MissingPerson extends Person {
  id: string;
  Status?: Status;
  // lastUpdated?: Date;
  // additionalInfo?: string;
  // source?: string;
  // tehudatZehut?: string;
  // passport?: string;
  // comments?: string;
  // age?: number;
  // lastSeenLocation?: string;
  // lastSeenComment?: string;
  // physicalDescription?: string;
  // address?: string;
  // eyeColor?: string;
  // hairColor?: string;
  // height?: string;
  // bodyType?: string;
  // clothes?: string;
  // bodyMarks?: string;
  // socialMedia?: string;
  // dataToVerify?: string;
  // militaryStatus?: string;
  // militaryId?: string;
  [k: string]: string | undefined;
  // reporter?: Reporter;
  Gender?: Gender;
}

interface Reporter extends Person {
  comment?: string;
}