# Docker 이미지를 구성하기 위해 베이스 이비지로 Node.js의 최신 버전을 사용
FROM node:latest

# 컨테이너 내부에 작업 디렉토리 설정
ENV APP_HOME=/usr/vue/
WORKDIR $APP_HOME

# package.json 및 package-${}.json 파일을 작업 디렉토리 복사 및 설치 
ADD package*.json ./
RUN npm install

# Dockerfile 이 위치한 디렉토리의 모든 파일과 디렉토리를 작업 디렉토리로 복사 
ADD . ./
#COPY . .

# 프로젝트를 빌드하기 위해 package.json에 정의된 build 스크립트 실행
#RUN npm run build

# http 서버를 전역으로 설치 후 빌드된 정적 파일을 호스팅
RUN npm install -g http-server


# 컨테이너에 노출 포트
EXPOSE 18081 8080

CMD [ "http-server", "dist"]


# docker build -t "bizweb-vue" ./
# docker run -p 18081:18081 -p 18082:8080 --name "bizweb-vue" "bizweb-vue"