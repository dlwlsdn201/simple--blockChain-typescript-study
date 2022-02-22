interface device {
  device_mac: string;
  device_name: string;
  subtype: number;
  parants_zone_id: string;
  group_id: number[];
}

// class device {
//   public device_mac: string;
//   public device_name: string;
//   public subtype: number;
//   public parents_zone_id: string;
//   public group_id: number[];
//   constructor(device_mac:string, device_name: string, subtype: number, parents_zone_id: string, group_id: number[] ) {
//     this.device_mac = device_mac;
//     this.device_name = device_name;
//     this.subtype = subtype;
//     this.parents_zone_id = parents_zone_id;
//     this.group_id = group_id;
//   }
// };

const sensor = {
  device_mac: 'ff:00:01:02:03:a2:a4:b3',
  device_name: '테스트용 재실센서',
  subtype: 5480,
  parants_zone_id: 'zcvkj0u30942ui09jfd32',
  group_id: [1, 126]
};

const showData = (data: device) => {
  return data;
};

const person = {
  name: 'Lee',
  age: 28,
  gender: 'male'
};

console.group('----info----');
console.log(showData(sensor));
console.groupEnd();
