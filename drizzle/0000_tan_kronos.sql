CREATE TABLE "todo" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "todo_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"todo" text NOT NULL,
	"create_at"  timestamp DEFAULT now(),
	"updated_at" timestamp
);
