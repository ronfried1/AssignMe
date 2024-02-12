const mockSoldiers = [
  { name: "Ariel" },
  { name: "arik" },
  { name: "Eve" },
  { name: "Charlie" },
  { name: "Ron" },
  { name: "Ronen" },
  { name: "lior" },
  { name: "niv" },
  { name: "johny" },
  { name: "kopper" },
  { name: "yoni" },
  { name: "or" },
  { name: "Olivia" },
  { name: "Daniel" },
  { name: "Sophia" },
  { name: "Liams" },
  { name: "Miar" },
  { name: "Henry" },
  { name: "ken" },
  { name: "William" },
  { name: "Charlotte" },
  { name: "James" },
  { name: "Amelia" },
  { name: "Benjamin" },
  { name: "lo" },
  { name: "Olivers" },
  { name: "Emilia" },
  { name: "Lucason" },
  { name: "Dror" },
  { name: "Ali" },
  { name: "Mori" },
  { name: "Ben" },
  // Add more soldiers as needed
];

const mockShavtzak = {
  missions: [
    {
      mission_id: "hamal",
      shifts: [
        {
          shift_id: "1",
          start: "07:00",
          end: "15:00",
          soldiers: [mockSoldiers[0], mockSoldiers[1]],
        },
        {
          shift_id: "2",
          start: "15:00",
          end: "23:00",
          soldiers: [mockSoldiers[2], mockSoldiers[3]],
        },
      ],
    },
    {
      mission_id: "haganat mahane",
      shifts: [
        {
          shift_id: "1",
          start: "07:00",
          end: "15:00",
          soldiers: [mockSoldiers[4], mockSoldiers[5]],
        },
        {
          shift_id: "2",
          start: "15:00",
          end: "23:00",
          soldiers: [mockSoldiers[6], mockSoldiers[7]],
        },
      ],
    },
    {
      mission_id: "mikve",
      shifts: [
        {
          shift_id: "1",
          start: "07:00",
          end: "15:00",
          soldiers: [mockSoldiers[8], mockSoldiers[9]],
        },
        {
          shift_id: "2",
          start: "15:00",
          end: "23:00",
          soldiers: [mockSoldiers[10], mockSoldiers[11]],
        },
      ],
    },
    {
      mission_id: "big",
      shifts: [
        {
          shift_id: "1",
          start: "08:00",
          end: "16:00",
          soldiers: [mockSoldiers[12], mockSoldiers[13]],
        },
      ],
    },
    {
      mission_id: "TE",
      shifts: [
        {
          shift_id: "1",
          start: "09:00",
          end: "17:00",
          soldiers: [mockSoldiers[14], mockSoldiers[15]],
        },
        {
          shift_id: "2",
          start: "17:00",
          end: "01:00",
          soldiers: [mockSoldiers[16], mockSoldiers[17]],
        },
        {
          shift_id: "3",
          start: "01:00",
          end: "09:00",
          soldiers: [mockSoldiers[18], mockSoldiers[19]],
        },
      ],
    },
    {
      mission_id: "mifal",
      shifts: [
        {
          shift_id: "1",
          start: "10:00",
          end: "18:00",
          soldiers: [mockSoldiers[20], mockSoldiers[21]],
        },
        {
          shift_id: "2",
          start: "18:00",
          end: "02:00",
          soldiers: [mockSoldiers[22], mockSoldiers[23]],
        },
        {
          shift_id: "3",
          start: "02:00",
          end: "10:00",
          soldiers: [mockSoldiers[24], mockSoldiers[25]],
        },
        {
          shift_id: "4",
          start: "10:00",
          end: "18:00",
          soldiers: [mockSoldiers[26], mockSoldiers[0]],
        },
      ],
    },
  ],
};

const allShifts = mockShavtzak.missions.flatMap((mission) =>
  mission.shifts.map((shift) => shift.soldiers)
);

const flatSoldiers = [].concat(...allShifts);

const uniqueSoldiers = Array.from(new Set(flatSoldiers.map((s) => s.name)));

const mockSelectedSoldiers = uniqueSoldiers.map((name) => ({ name }));

const availableSoldiers = mockSoldiers.filter(
  (soldier) =>
    !mockSelectedSoldiers.some(
      (selectedSoldier) => selectedSoldier.name === soldier.name
    )
);

const mockMissions = [
  { mission_id: "hamal", shifts: [] },
  { mission_id: "moked", shifts: [] },
  { mission_id: "haganat mahane", shifts: [] },
  { mission_id: "mikve", shifts: [] },
  { mission_id: "big", shifts: [] },
  { mission_id: "TE", shifts: [] },
  { mission_id: "mifal", shifts: [] },
];
const mockSelectedMissions = [
  { mission_id: "hamal", shifts: [] },
  { mission_id: "haganat mahane", shifts: [] },
  { mission_id: "mikve", shifts: [] },
  { mission_id: "big", shifts: [] },
  { mission_id: "TE", shifts: [] },
  { mission_id: "mifal", shifts: [] },
];
console.log(mockMissions);
export default {
  mockShavtzak,
  mockSoldiers,
  mockSelectedSoldiers,
  mockMissions,
  mockSelectedMissions,
  availableSoldiers,
};
