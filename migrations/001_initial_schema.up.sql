CREATE TABLE "vendor" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE "order" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "vendor_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "inventory" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "vendor_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "order_item" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "order_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "billing" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "vendor_id" uuid,
  PRIMARY KEY ("id")
);