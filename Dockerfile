# 拉取node
FROM node:alpine
# 设置工作目录
WORKDIR /app
# 将项目文件复制到容器中
COPY . .
# 安装项目依赖
RUN npm install
# 构建生产环境
RUN npm run build
# 暴露端口
EXPOSE 8000
# 启动应用
CMD ["npm", "run", "dev"]

# 构建镜像
# podman build -t utility .
# 运行
# podman run -dp 8000:5173 utility