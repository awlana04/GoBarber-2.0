/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as prisma from "./../node_modules/.prisma/client/index"
import { Context } from "./../src/pages/api/context"
import { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AppointmentCreateInput: { // input type
    barber: NexusGenInputs['BarberCreateNestedOneWithoutAppointmentInput']; // BarberCreateNestedOneWithoutAppointmentInput!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime']; // DateTime!
    id?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    user: NexusGenInputs['UserCreateNestedOneWithoutAppointmentInput']; // UserCreateNestedOneWithoutAppointmentInput!
  }
  AppointmentCreateManyBarberInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime']; // DateTime!
    id?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    userId: string; // String!
  }
  AppointmentCreateManyBarberInputEnvelope: { // input type
    data?: NexusGenInputs['AppointmentCreateManyBarberInput'][] | null; // [AppointmentCreateManyBarberInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  AppointmentCreateManyUserInput: { // input type
    barberId: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime']; // DateTime!
    id?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  AppointmentCreateManyUserInputEnvelope: { // input type
    data?: NexusGenInputs['AppointmentCreateManyUserInput'][] | null; // [AppointmentCreateManyUserInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  AppointmentCreateNestedManyWithoutBarberInput: { // input type
    connect?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['AppointmentCreateOrConnectWithoutBarberInput'][] | null; // [AppointmentCreateOrConnectWithoutBarberInput!]
    create?: NexusGenInputs['AppointmentCreateWithoutBarberInput'][] | null; // [AppointmentCreateWithoutBarberInput!]
    createMany?: NexusGenInputs['AppointmentCreateManyBarberInputEnvelope'] | null; // AppointmentCreateManyBarberInputEnvelope
  }
  AppointmentCreateNestedManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['AppointmentCreateOrConnectWithoutUserInput'][] | null; // [AppointmentCreateOrConnectWithoutUserInput!]
    create?: NexusGenInputs['AppointmentCreateWithoutUserInput'][] | null; // [AppointmentCreateWithoutUserInput!]
    createMany?: NexusGenInputs['AppointmentCreateManyUserInputEnvelope'] | null; // AppointmentCreateManyUserInputEnvelope
  }
  AppointmentCreateOrConnectWithoutBarberInput: { // input type
    create: NexusGenInputs['AppointmentCreateWithoutBarberInput']; // AppointmentCreateWithoutBarberInput!
    where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
  }
  AppointmentCreateOrConnectWithoutUserInput: { // input type
    create: NexusGenInputs['AppointmentCreateWithoutUserInput']; // AppointmentCreateWithoutUserInput!
    where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
  }
  AppointmentCreateWithoutBarberInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime']; // DateTime!
    id?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    user: NexusGenInputs['UserCreateNestedOneWithoutAppointmentInput']; // UserCreateNestedOneWithoutAppointmentInput!
  }
  AppointmentCreateWithoutUserInput: { // input type
    barber: NexusGenInputs['BarberCreateNestedOneWithoutAppointmentInput']; // BarberCreateNestedOneWithoutAppointmentInput!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    date: NexusGenScalars['DateTime']; // DateTime!
    id?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  AppointmentScalarWhereInput: { // input type
    AND?: NexusGenInputs['AppointmentScalarWhereInput'][] | null; // [AppointmentScalarWhereInput!]
    NOT?: NexusGenInputs['AppointmentScalarWhereInput'][] | null; // [AppointmentScalarWhereInput!]
    OR?: NexusGenInputs['AppointmentScalarWhereInput'][] | null; // [AppointmentScalarWhereInput!]
    barberId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    date?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    userId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  AppointmentUpdateInput: { // input type
    barber?: NexusGenInputs['BarberUpdateOneRequiredWithoutAppointmentInput'] | null; // BarberUpdateOneRequiredWithoutAppointmentInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    user?: NexusGenInputs['UserUpdateOneRequiredWithoutAppointmentInput'] | null; // UserUpdateOneRequiredWithoutAppointmentInput
  }
  AppointmentUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  AppointmentUpdateManyWithWhereWithoutBarberInput: { // input type
    data: NexusGenInputs['AppointmentUpdateManyMutationInput']; // AppointmentUpdateManyMutationInput!
    where: NexusGenInputs['AppointmentScalarWhereInput']; // AppointmentScalarWhereInput!
  }
  AppointmentUpdateManyWithWhereWithoutUserInput: { // input type
    data: NexusGenInputs['AppointmentUpdateManyMutationInput']; // AppointmentUpdateManyMutationInput!
    where: NexusGenInputs['AppointmentScalarWhereInput']; // AppointmentScalarWhereInput!
  }
  AppointmentUpdateManyWithoutBarberInput: { // input type
    connect?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['AppointmentCreateOrConnectWithoutBarberInput'][] | null; // [AppointmentCreateOrConnectWithoutBarberInput!]
    create?: NexusGenInputs['AppointmentCreateWithoutBarberInput'][] | null; // [AppointmentCreateWithoutBarberInput!]
    createMany?: NexusGenInputs['AppointmentCreateManyBarberInputEnvelope'] | null; // AppointmentCreateManyBarberInputEnvelope
    delete?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    deleteMany?: NexusGenInputs['AppointmentScalarWhereInput'][] | null; // [AppointmentScalarWhereInput!]
    disconnect?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    set?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    update?: NexusGenInputs['AppointmentUpdateWithWhereUniqueWithoutBarberInput'][] | null; // [AppointmentUpdateWithWhereUniqueWithoutBarberInput!]
    updateMany?: NexusGenInputs['AppointmentUpdateManyWithWhereWithoutBarberInput'][] | null; // [AppointmentUpdateManyWithWhereWithoutBarberInput!]
    upsert?: NexusGenInputs['AppointmentUpsertWithWhereUniqueWithoutBarberInput'][] | null; // [AppointmentUpsertWithWhereUniqueWithoutBarberInput!]
  }
  AppointmentUpdateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['AppointmentCreateOrConnectWithoutUserInput'][] | null; // [AppointmentCreateOrConnectWithoutUserInput!]
    create?: NexusGenInputs['AppointmentCreateWithoutUserInput'][] | null; // [AppointmentCreateWithoutUserInput!]
    createMany?: NexusGenInputs['AppointmentCreateManyUserInputEnvelope'] | null; // AppointmentCreateManyUserInputEnvelope
    delete?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    deleteMany?: NexusGenInputs['AppointmentScalarWhereInput'][] | null; // [AppointmentScalarWhereInput!]
    disconnect?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    set?: NexusGenInputs['AppointmentWhereUniqueInput'][] | null; // [AppointmentWhereUniqueInput!]
    update?: NexusGenInputs['AppointmentUpdateWithWhereUniqueWithoutUserInput'][] | null; // [AppointmentUpdateWithWhereUniqueWithoutUserInput!]
    updateMany?: NexusGenInputs['AppointmentUpdateManyWithWhereWithoutUserInput'][] | null; // [AppointmentUpdateManyWithWhereWithoutUserInput!]
    upsert?: NexusGenInputs['AppointmentUpsertWithWhereUniqueWithoutUserInput'][] | null; // [AppointmentUpsertWithWhereUniqueWithoutUserInput!]
  }
  AppointmentUpdateWithWhereUniqueWithoutBarberInput: { // input type
    data: NexusGenInputs['AppointmentUpdateWithoutBarberInput']; // AppointmentUpdateWithoutBarberInput!
    where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
  }
  AppointmentUpdateWithWhereUniqueWithoutUserInput: { // input type
    data: NexusGenInputs['AppointmentUpdateWithoutUserInput']; // AppointmentUpdateWithoutUserInput!
    where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
  }
  AppointmentUpdateWithoutBarberInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    user?: NexusGenInputs['UserUpdateOneRequiredWithoutAppointmentInput'] | null; // UserUpdateOneRequiredWithoutAppointmentInput
  }
  AppointmentUpdateWithoutUserInput: { // input type
    barber?: NexusGenInputs['BarberUpdateOneRequiredWithoutAppointmentInput'] | null; // BarberUpdateOneRequiredWithoutAppointmentInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    date?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  AppointmentUpsertWithWhereUniqueWithoutBarberInput: { // input type
    create: NexusGenInputs['AppointmentCreateWithoutBarberInput']; // AppointmentCreateWithoutBarberInput!
    update: NexusGenInputs['AppointmentUpdateWithoutBarberInput']; // AppointmentUpdateWithoutBarberInput!
    where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
  }
  AppointmentUpsertWithWhereUniqueWithoutUserInput: { // input type
    create: NexusGenInputs['AppointmentCreateWithoutUserInput']; // AppointmentCreateWithoutUserInput!
    update: NexusGenInputs['AppointmentUpdateWithoutUserInput']; // AppointmentUpdateWithoutUserInput!
    where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
  }
  AppointmentWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  BarberCreateInput: { // input type
    appointment?: NexusGenInputs['AppointmentCreateNestedManyWithoutBarberInput'] | null; // AppointmentCreateNestedManyWithoutBarberInput
    barberLocation: string; // String!
    barberName: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    id?: string | null; // String
    openOnWeekends: boolean; // Boolean!
    photos?: NexusGenInputs['BarberCreatephotosInput'] | null; // BarberCreatephotosInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  BarberCreateNestedOneWithoutAppointmentInput: { // input type
    connect?: NexusGenInputs['BarberWhereUniqueInput'] | null; // BarberWhereUniqueInput
    connectOrCreate?: NexusGenInputs['BarberCreateOrConnectWithoutAppointmentInput'] | null; // BarberCreateOrConnectWithoutAppointmentInput
    create?: NexusGenInputs['BarberCreateWithoutAppointmentInput'] | null; // BarberCreateWithoutAppointmentInput
  }
  BarberCreateOrConnectWithoutAppointmentInput: { // input type
    create: NexusGenInputs['BarberCreateWithoutAppointmentInput']; // BarberCreateWithoutAppointmentInput!
    where: NexusGenInputs['BarberWhereUniqueInput']; // BarberWhereUniqueInput!
  }
  BarberCreateWithoutAppointmentInput: { // input type
    barberLocation: string; // String!
    barberName: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    id?: string | null; // String
    openOnWeekends: boolean; // Boolean!
    photos?: NexusGenInputs['BarberCreatephotosInput'] | null; // BarberCreatephotosInput
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  BarberCreatephotosInput: { // input type
    set?: string[] | null; // [String!]
  }
  BarberUpdateInput: { // input type
    appointment?: NexusGenInputs['AppointmentUpdateManyWithoutBarberInput'] | null; // AppointmentUpdateManyWithoutBarberInput
    barberLocation?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    barberName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    openOnWeekends?: NexusGenInputs['BoolFieldUpdateOperationsInput'] | null; // BoolFieldUpdateOperationsInput
    photos?: NexusGenInputs['BarberUpdatephotosInput'] | null; // BarberUpdatephotosInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  BarberUpdateOneRequiredWithoutAppointmentInput: { // input type
    connect?: NexusGenInputs['BarberWhereUniqueInput'] | null; // BarberWhereUniqueInput
    connectOrCreate?: NexusGenInputs['BarberCreateOrConnectWithoutAppointmentInput'] | null; // BarberCreateOrConnectWithoutAppointmentInput
    create?: NexusGenInputs['BarberCreateWithoutAppointmentInput'] | null; // BarberCreateWithoutAppointmentInput
    update?: NexusGenInputs['BarberUpdateWithoutAppointmentInput'] | null; // BarberUpdateWithoutAppointmentInput
    upsert?: NexusGenInputs['BarberUpsertWithoutAppointmentInput'] | null; // BarberUpsertWithoutAppointmentInput
  }
  BarberUpdateWithoutAppointmentInput: { // input type
    barberLocation?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    barberName?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    openOnWeekends?: NexusGenInputs['BoolFieldUpdateOperationsInput'] | null; // BoolFieldUpdateOperationsInput
    photos?: NexusGenInputs['BarberUpdatephotosInput'] | null; // BarberUpdatephotosInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  BarberUpdatephotosInput: { // input type
    push?: string | null; // String
    set?: string[] | null; // [String!]
  }
  BarberUpsertWithoutAppointmentInput: { // input type
    create: NexusGenInputs['BarberCreateWithoutAppointmentInput']; // BarberCreateWithoutAppointmentInput!
    update: NexusGenInputs['BarberUpdateWithoutAppointmentInput']; // BarberUpdateWithoutAppointmentInput!
  }
  BarberWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  BoolFieldUpdateOperationsInput: { // input type
    set?: boolean | null; // Boolean
  }
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableDateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    appointment?: NexusGenInputs['AppointmentCreateNestedManyWithoutUserInput'] | null; // AppointmentCreateNestedManyWithoutUserInput
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    image?: string | null; // String
    name: string; // String!
    password?: string | null; // String
    type?: boolean | null; // Boolean
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  UserCreateNestedOneWithoutAppointmentInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutAppointmentInput'] | null; // UserCreateOrConnectWithoutAppointmentInput
    create?: NexusGenInputs['UserCreateWithoutAppointmentInput'] | null; // UserCreateWithoutAppointmentInput
  }
  UserCreateOrConnectWithoutAppointmentInput: { // input type
    create: NexusGenInputs['UserCreateWithoutAppointmentInput']; // UserCreateWithoutAppointmentInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateWithoutAppointmentInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    image?: string | null; // String
    name: string; // String!
    password?: string | null; // String
    type?: boolean | null; // Boolean
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  UserUpdateInput: { // input type
    appointment?: NexusGenInputs['AppointmentUpdateManyWithoutUserInput'] | null; // AppointmentUpdateManyWithoutUserInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    emailVerified?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    image?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    type?: NexusGenInputs['BoolFieldUpdateOperationsInput'] | null; // BoolFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  UserUpdateOneRequiredWithoutAppointmentInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutAppointmentInput'] | null; // UserCreateOrConnectWithoutAppointmentInput
    create?: NexusGenInputs['UserCreateWithoutAppointmentInput'] | null; // UserCreateWithoutAppointmentInput
    update?: NexusGenInputs['UserUpdateWithoutAppointmentInput'] | null; // UserUpdateWithoutAppointmentInput
    upsert?: NexusGenInputs['UserUpsertWithoutAppointmentInput'] | null; // UserUpsertWithoutAppointmentInput
  }
  UserUpdateWithoutAppointmentInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    emailVerified?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    image?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    type?: NexusGenInputs['BoolFieldUpdateOperationsInput'] | null; // BoolFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  UserUpsertWithoutAppointmentInput: { // input type
    create: NexusGenInputs['UserCreateWithoutAppointmentInput']; // UserCreateWithoutAppointmentInput!
    update: NexusGenInputs['UserUpdateWithoutAppointmentInput']; // UserUpdateWithoutAppointmentInput!
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  QueryMode: prisma.QueryMode
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Appointment: prisma.Appointment;
  Barber: prisma.Barber;
  Mutation: {};
  Query: {};
  User: prisma.User;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Appointment: { // field return type
    createdAt: number | null; // Int
    date: number | null; // Int
    id: string; // String!
    updatedAt: number | null; // Int
  }
  Barber: { // field return type
    barberLocation: string; // String!
    barberName: string; // String!
    createdAt: number | null; // Int
    description: string | null; // String
    id: string; // String!
    openOnWeekends: boolean; // Boolean!
    photos: string[]; // [String!]!
    updatedAt: number | null; // Int
  }
  Mutation: { // field return type
    createOneAppointment: NexusGenRootTypes['Appointment']; // Appointment!
    createOneBarber: NexusGenRootTypes['Barber']; // Barber!
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteOneAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    deleteOneBarber: NexusGenRootTypes['Barber'] | null; // Barber
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    updateOneAppointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    updateOneBarber: NexusGenRootTypes['Barber'] | null; // Barber
    updateOneUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    appointment: NexusGenRootTypes['Appointment'] | null; // Appointment
    appointments: NexusGenRootTypes['Appointment'][]; // [Appointment!]!
    barber: NexusGenRootTypes['Barber'] | null; // Barber
    barbers: NexusGenRootTypes['Barber'][]; // [Barber!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    createdAt: number | null; // Int
    email: string | null; // String
    emailVerified: NexusGenScalars['DateTime'] | null; // DateTime
    id: string; // String!
    image: string | null; // String
    name: string; // String!
    password: string | null; // String
    type: boolean; // Boolean!
    updatedAt: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  Appointment: { // field return type name
    createdAt: 'Int'
    date: 'Int'
    id: 'String'
    updatedAt: 'Int'
  }
  Barber: { // field return type name
    barberLocation: 'String'
    barberName: 'String'
    createdAt: 'Int'
    description: 'String'
    id: 'String'
    openOnWeekends: 'Boolean'
    photos: 'String'
    updatedAt: 'Int'
  }
  Mutation: { // field return type name
    createOneAppointment: 'Appointment'
    createOneBarber: 'Barber'
    createOneUser: 'User'
    deleteOneAppointment: 'Appointment'
    deleteOneBarber: 'Barber'
    deleteOneUser: 'User'
    updateOneAppointment: 'Appointment'
    updateOneBarber: 'Barber'
    updateOneUser: 'User'
  }
  Query: { // field return type name
    appointment: 'Appointment'
    appointments: 'Appointment'
    barber: 'Barber'
    barbers: 'Barber'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    createdAt: 'Int'
    email: 'String'
    emailVerified: 'DateTime'
    id: 'String'
    image: 'String'
    name: 'String'
    password: 'String'
    type: 'Boolean'
    updatedAt: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneAppointment: { // args
      data: NexusGenInputs['AppointmentCreateInput']; // AppointmentCreateInput!
    }
    createOneBarber: { // args
      data: NexusGenInputs['BarberCreateInput']; // BarberCreateInput!
    }
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteOneAppointment: { // args
      where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
    }
    deleteOneBarber: { // args
      where: NexusGenInputs['BarberWhereUniqueInput']; // BarberWhereUniqueInput!
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateOneAppointment: { // args
      data: NexusGenInputs['AppointmentUpdateInput']; // AppointmentUpdateInput!
      where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
    }
    updateOneBarber: { // args
      data: NexusGenInputs['BarberUpdateInput']; // BarberUpdateInput!
      where: NexusGenInputs['BarberWhereUniqueInput']; // BarberWhereUniqueInput!
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    appointment: { // args
      where: NexusGenInputs['AppointmentWhereUniqueInput']; // AppointmentWhereUniqueInput!
    }
    appointments: { // args
      after?: NexusGenInputs['AppointmentWhereUniqueInput'] | null; // AppointmentWhereUniqueInput
      before?: NexusGenInputs['AppointmentWhereUniqueInput'] | null; // AppointmentWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    barber: { // args
      where: NexusGenInputs['BarberWhereUniqueInput']; // BarberWhereUniqueInput!
    }
    barbers: { // args
      after?: NexusGenInputs['BarberWhereUniqueInput'] | null; // BarberWhereUniqueInput
      before?: NexusGenInputs['BarberWhereUniqueInput'] | null; // BarberWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}