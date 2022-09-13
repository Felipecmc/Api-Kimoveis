import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTypesSchedules1662051501942 implements MigrationInterface {
    name = 'fixTypesSchedules1662051501942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3193709d61be5a23d570547c964"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "UQ_3193709d61be5a23d570547c964"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "propertyId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "UQ_3193709d61be5a23d570547c964" UNIQUE ("propertyId")`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3193709d61be5a23d570547c964" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
