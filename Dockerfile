FROM python:3.12-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends nginx supervisor \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/edgerunners.conf

EXPOSE 10000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
