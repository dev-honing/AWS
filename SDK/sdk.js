const AWS = require('aws-sdk');

// AWS 자격 증명 설정 (AWS 계정의 액세스 키 및 시크릿 키)
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'us-east-1', // 원하는 리전으로 변경
});

// AWS EC2 객체 생성
const ec2 = new AWS.EC2();

// EC2 인스턴스 시작 요청
const params = {
  ImageId: 'ami-xxxxxxxxxxxxxxxxx', // 사용할 AMI ID
  InstanceType: 't2.micro', // 인스턴스 유형
  MinCount: 1, // 최소 인스턴스 수
  MaxCount: 1, // 최대 인스턴스 수
  KeyName: 'yourKeyPairName', // 사용할 키 페어 이름
};

ec2.runInstances(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('EC2 인스턴스가 성공적으로 시작되었습니다.');
    console.log('Instance ID:', data.Instances[0].InstanceId);
  }
});
