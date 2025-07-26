import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../utilities/libs/axios';

const register = async ({ id, statusUser, action }: { id: string; statusUser: string; action: 'remove' | 'add' }) => {
    console.log('act :', action);
    const { data } = await api.request({
        method: action === 'remove' ? 'DELETE' : 'POST',
        url: action === 'remove' ? `/emp/delete-contract` : `/auth/inactivated`,
        data: {
            id,
            statusUser,
        },
    });

    return data;
};

const useMutateActionUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            // Wrap the queryKey string in an array
            queryClient.invalidateQueries({ queryKey: ['user-inactivated-remove'] });

            return data;
        },
        onError: (error: any) => {
            console.log(' ERROR ', error);

            if (error.response && error.response.status === 502) {
                window.location.href = '/auth/login?sessionNull=true';
                return;
            }

            // If error is not 502, show an alert
            alert(error.response?.data?.message ?? error?.message);
        },
    });
};

export default useMutateActionUser;