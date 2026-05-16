"use client"

import React from 'react';

import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteSweep } from 'react-icons/md';
import { deleteDestination } from '@/lib/Action';

function DeleteDestination({ destination }) {

    const { destinationName, _id } = destination;

    const handleDelete = async (id) => {
        return await deleteDestination(id);
    };

    return (
        <div>
            <AlertDialog>
                <Button variant="danger">
                    <MdDeleteSweep />
                    Delete Destination
                </Button>

                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                    Delete project permanently?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete
                                    <strong> {destinationName} </strong>
                                    and all of its data.
                                    This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button
                                    slot="close"
                                    variant="tertiary"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => handleDelete(_id)}
                                    slot={closed} variant="danger"
                                >
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>

        </div>
    );
}

export default DeleteDestination;