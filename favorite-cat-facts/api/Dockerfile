FROM ruby:3.1
WORKDIR /api
RUN set -eux && \
    apt-get update -qq && \
    apt-get install -y

COPY Gemfile Gemfile.lock* ./

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# イメージ実行時に起動させる主プロセスを設定
CMD ["rails", "server", "-p", "8080", "-b", "0.0.0.0"]